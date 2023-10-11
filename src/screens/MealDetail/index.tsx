import { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';
import { useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import { mealGetById } from '@storage/meal/mealGetById';

import { BackButton, DateTimeHeader, DateTimeText, DescriptionText, HeaderTitle, NameText, TagContainer, TagStatus, TagText } from './styles';

type RouteParams = {
  id: string;
}

export function MealDetail() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  async function fetchMeal() {
    const meal = await mealGetById(id);
    console.log(meal);
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    // <Container>
    //   <View style={{ flex: 1 }} />

    //   <Button title="Editar refeição" style={{ marginBottom: 12 }} />

    //   <Button type="SECONDARY" title="Excluir refeição" />
    // </Container>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 24 }}>
        <HeaderTitle>
          Refeição
        </HeaderTitle>

        <BackButton>
          <ArrowLeft />
        </BackButton>
      </View>

      <SafeAreaView
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 120,
          backgroundColor: '#fff',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: 24,
          paddingBottom: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <NameText>
            Sanduíche
          </NameText>

          <DescriptionText>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </DescriptionText>

          <DateTimeHeader>
            Data e Hora
          </DateTimeHeader>

          <DateTimeText>
            12/08/2022 às 16:00
          </DateTimeText>

          <TagContainer>
            <TagStatus />

            <TagText>
              dentro da dieta
            </TagText>
          </TagContainer>
        </View>

        <Button title="Editar refeição" style={{ marginBottom: 12 }} />

        <Button type="SECONDARY" title="Excluir refeição" />
      </SafeAreaView>
    </SafeAreaView>
  );
}