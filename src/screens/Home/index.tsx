import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Resume } from '@components/Resume';
import { Button } from '@components/Button';

import { Container, TitleList } from './styles';
import { DayItem } from '@components/DayItem';

export function Home() {
  const { navigate } = useNavigation();

  const [dietList, setDietList] = useState([
    {
      data: '12.08.22',
      items: ['X-tudo', 'Whey protein com leite', 'Salada ceasar com frango', 'Nova refeição']
    },
    {
      data: '11.08.22',
      items: ['X-tudo', 'Whey protein com leite', 'Salada ceasar com frango', 'Nova refeição']
    }
  ]);

  function handleResumeNavigation() {
    navigate('statistics');
  }

  function handleNewMealNavigation() {
    navigate('new_meal');
  }

  return (
    <Container>
      <Header />

      <Resume onPress={handleResumeNavigation} />

      <TitleList>Refeições</TitleList>

      <Button title="Nova refeição" icon="add" onPress={handleNewMealNavigation} />

      <FlatList
        data={dietList}
        keyExtractor={item => item.data}
        renderItem={({ item }) => (
          <DayItem data={item.data} items={item.items} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}