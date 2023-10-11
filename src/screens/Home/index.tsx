import { useCallback, useState } from 'react';
import { Alert, SectionList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Resume } from '@components/Resume';
import { Button } from '@components/Button';
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

  async function getDiets() {
    try {
      setLoading(true);

      // const data = await mealGetAll();
      // const diets: DietPresentation[] = [];
      // data.sort((a, b) => {
      //   const compare = a.date.localeCompare(b.date);

      //   if (compare === 0) {
      //     return a.hour.localeCompare(b.hour);
      //   }

      //   return compare;
      // });
      // data.map(item => {
      //   diets.push({
      //     date: item.date,
      //     data: []
      //   });
      // });
      const diets = await dietGetAll();
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
    navigate('new_meal');
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

      <Resume onPress={handleResumeNavigation} />

      <TitleList>Refeições</TitleList>

      <Button
        title="Nova refeição"
        icon="add"
        onPress={handleNewMealNavigation}
      />

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
      {/* <FlatList
        data={dietList}
        keyExtractor={item => item.date}
        renderItem={({ item }) => (
          <DayItem data={item.date} items={[]} />
        )}
        showsVerticalScrollIndicator={false}
      /> */}
    </Container>
  );
}