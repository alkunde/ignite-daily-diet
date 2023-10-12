import { useCallback, useState } from 'react';
import { Alert, SectionList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Resume } from '@components/Resume';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { Meal } from '@components/Meal';

import { MealPresentation } from '@storage/meal/MealStorageDTO';
import { mealGetAll } from '@storage/meal/mealGetAll';
import { dietGetAll } from '@storage/diet/dietGetAll';

import { Container, TitleList, DateText } from './styles';

type DietPresentation = {
  date: string;
  data: MealPresentation[];
}

export function Home() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true);
  const [dietList, setDietList] = useState<DietPresentation[]>([]);
  const [total, setTotal] = useState(0);
  const [totalInDiet, setTotalInDiet] = useState(0);

  async function getDiets() {
    try {
      setLoading(true);

      const diets = await dietGetAll();
      const meals = await mealGetAll();
      setTotal(meals.length);
      setTotalInDiet(meals.filter(item => item.status).length);
      setDietList(diets);
    } catch(error) {
      console.log(error);
      Alert.alert('Aviso', 'Não foi possível carregar as dietas');
    } finally {
      setLoading(false);
    }
  }

  function handleResumeNavigation() {
    navigate('statistics');
  }

  function handleNewMealNavigation() {
    navigate('new_meal', { meal: undefined });
  }

  function handleMealDetailNavigation(id: string) {
    navigate('meal_detail', { id });
  }

  useFocusEffect(useCallback(() => {
    getDiets();
  }, []));

  return (
    <Container>
      <Header />

      {dietList.length > 0 && (
        <Resume
          total={total}
          totalInDiet={totalInDiet}
          onPress={handleResumeNavigation}
        />
      )}

      <TitleList>Refeições</TitleList>

      <Button
        title="Nova refeição"
        icon="add"
        onPress={handleNewMealNavigation}
      />

      {loading ? <Loading /> : (
        <SectionList
          sections={dietList}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <Meal
              item={item}
              handlePress={() => handleMealDetailNavigation(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => <DateText>{date}</DateText>}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ height: 60 }} />}
        />
      )}
    </Container>
  );
}