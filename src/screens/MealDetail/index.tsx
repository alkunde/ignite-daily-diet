import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import { mealGetById } from '@storage/meal/mealGetById';
import { mealRemoveById } from '@storage/meal/mealRemoveById';

import {
  Container,
  BackButton,
  DateTimeHeader,
  DateTimeText,
  DescriptionText,
  HeaderTitle,
  NameText,
  TagContainer,
  TagStatus,
  TagText,
} from './styles';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

type RouteParams = {
  id: string;
}

export function MealDetail() {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [meal, setMeal] = useState<MealStorageDTO>();

  async function fetchMeal() {
    const actual = await mealGetById(id);
    setMeal(actual);
  }

  async function handleRemoveMeal() {
    await mealRemoveById(id);
    goBack();
  }

  async function confirmRemoveMeal() {
    Alert.alert(
      'Aviso',
      'Confirma a exclusão dessa refeição?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: handleRemoveMeal
        }
      ]
    )
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    meal && (
      <Container status={meal.status}>
        <View style={{ padding: 24 }}>
          <HeaderTitle>
            Refeição
          </HeaderTitle>

          <BackButton onPress={goBack}>
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
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <NameText>
              {meal.name}
            </NameText>

            <DescriptionText>
              {meal.description}
            </DescriptionText>

            <DateTimeHeader>
              Data e Hora
            </DateTimeHeader>

            <DateTimeText>
              {`${meal.date} às ${meal.hour}`}
            </DateTimeText>

            <TagContainer>
              <TagStatus status={meal.status} />

              <TagText>
                { meal.status ? "dentro da dieta" : "fora da dieta" }
              </TagText>
            </TagContainer>
          </View>

          <Button
            style={{ marginBottom: 12 }}
            title="Editar refeição"
          />

          <Button
            title="Excluir refeição"
            type="SECONDARY"
            onPress={confirmRemoveMeal}
          />
        </SafeAreaView>
      </Container>
    )
  );
}