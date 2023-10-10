import { useCallback, useState } from 'react';
import { Alert, SectionList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Resume } from '@components/Resume';
import { Button } from '@components/Button';
import { Meal } from '@components/Meal';

import { MealPresentation } from '@storage/meal/MealStorageDTO';

import { Container, TitleList, DateText } from './styles';

type DietPresentation = {
  date: string;
  data: MealPresentation[];
}

export function Home() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true);
  const [dietList, setDietList] = useState<DietPresentation[]>([
    {
      date: '12.08.22',
      data: [
        {
          id: 'abx',
          hour: '07:00',
          name: 'X-tudo',
          status: false,
        },
        {
          id: 'abc',
          hour: '08:00',
          name: 'Café da manhã',
          status: true,
        }
      ]
    },
    {
      date: '13.08.22',
      data: [
        {
          id: 'abz',
          hour: '09:00',
          name: 'X-tudo',
          status: false,
        },
        {
          id: 'aby',
          hour: '10:00',
          name: 'Café da manhã',
          status: false,
        },
        {
          id: 'zbx',
          hour: '12:00',
          name: 'Almoço',
          status: true,
        }
      ]
    },
    {
      date: '14.08.22',
      data: [
        {
          id: 'arx',
          hour: '09:00',
          name: 'X-tudo',
          status: true,
        },
        {
          id: 'atx',
          hour: '10:00',
          name: 'Café da manhã',
          status: true,
        },
        {
          id: 'ar8',
          hour: '12:00',
          name: 'Almoço',
          status: true,
        }
      ]
    },
  ]);

  async function getDiets() {
    try {
      setLoading(true);

      // const data = await mealGetAll();
      // data.sort((a, b) => {
      //   const compare = a.date.localeCompare(b.date);

      //   if (compare === 0) {
      //     return a.hour.localeCompare(b.hour);
      //   }

      //   return compare;
      // });
      // setDietList(data);
      // console.log(data);
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
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => <Meal item={item} />}
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