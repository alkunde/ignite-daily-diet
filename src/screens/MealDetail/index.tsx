import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import { mealGetById } from '@storage/meal/mealGetById';
import { mealRemoveById } from '@storage/meal/mealRemoveById';

import {
  Container,
  HeaderContainer,
  BackButton,
  HeaderTitle,
  BottomContainer,
  BottomContent,
  DateTimeHeader,
  DateTimeText,
  DescriptionText,
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
  const { goBack, navigate } = useNavigation();
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

  function handleEditMeal() {
    navigate('new_meal', { meal });
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
        <HeaderContainer>
          <HeaderTitle>
            Refeição
          </HeaderTitle>

          <BackButton onPress={goBack}>
            <ArrowLeft />
          </BackButton>
        </HeaderContainer>

        <BottomContainer>
          <BottomContent>
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
          </BottomContent>

          <Button
            style={{ marginBottom: 12 }}
            title="Editar refeição"
            onPress={handleEditMeal}
          />

          <Button
            title="Excluir refeição"
            type="SECONDARY"
            onPress={confirmRemoveMeal}
          />
        </BottomContainer>
      </Container>
    )
  );
}