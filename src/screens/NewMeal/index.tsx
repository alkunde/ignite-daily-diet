import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Diet } from '@components/Diet';
import { Input } from '@components/Input';

import { mealCreate } from '@storage/meal/mealCreate';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import { AppError } from '@utils/AppError';

import {
  Container,
  HeaderContainer,
  BackButton,
  HeaderTitle,
  BottomContainer,
  BottomContent,
  Label,
} from './styles';

type RouteParams = {
  meal: MealStorageDTO;
}

export function NewMeal() {
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealHour, setMealHour] = useState('');
  const [mealType, setMealType] = useState('');

  async function handleFeedbackNavigation() {
    if (name.trim().length === 0) {
      return Alert.alert('Aviso', 'Informe o nome da refeição');
    }

    if (description.trim().length === 0) {
      return Alert.alert('Aviso', 'Informe a descrição da refeição');
    }

    if (mealDate.trim().length === 0) {
      return Alert.alert('Aviso', 'Informe a data da refeição');
    }

    if (mealHour.trim().length === 0) {
      return Alert.alert('Aviso', 'Informe a hora da refeição');
    }

    if (mealType.trim().length === 0) {
      return Alert.alert('Aviso', 'Informe se a refeição está dentro ou fora da dieta');
    }
    const newMeal: MealStorageDTO = {
      id: Date.now().toString(),
      name,
      description,
      date: mealDate,
      hour: mealHour,
      status: mealType === 'POSITIVE',
    };

    try {
      await mealCreate(newMeal);

      navigate('feedback', { positive: newMeal.status });
    } catch(error) {
      if (error instanceof AppError) {
        Alert.alert('Aviso', error.message);
      } else {
        Alert.alert('Aviso', 'Não foi possível registrar essa refeição');
      }
    }
  }

  function handleClickPositiveSelector() {
    setMealType('POSITIVE');
  }

  function handleClickNegativeSelector() {
    setMealType('NEGATIVE');
  }

  useEffect(() => {
    if (meal !== undefined) {
      setName(meal.name);
      setDescription(meal.description);
      setMealDate(meal.date);
      setMealHour(meal.hour);
      setMealType(meal.status ? 'POSITIVE' : 'NEGATIVE');
    }
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>
          {meal ? 'Editar refeição' : 'Nova refeição'}
        </HeaderTitle>

        <BackButton onPress={goBack}>
          <ArrowLeft />
        </BackButton>
      </HeaderContainer>

      <BottomContainer>
        <BottomContent>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={setName}
          />

          <Label>Descrição</Label>
          <Input
            value={description}
            onChangeText={setDescription}
            size={120}
            multiline
          />

          <View style={{ flexDirection: 'row', paddingBottom: 48 }}>
            <View style={{ flex: 1 }}>
              <Label>Data</Label>
              <Input
                value={mealDate}
                onChangeText={setMealDate}
              />
            </View>

            <View style={{ width: 16 }} />

            <View style={{ flex: 1 }}>
              <Label>Hora</Label>
              <Input
                value={mealHour}
                onChangeText={setMealHour}
              />
            </View>
          </View>

          <Diet
            label="Está dentro da dieta?"
            selected={mealType}
            onPositiveClick={handleClickPositiveSelector}
            onNegativeClick={handleClickNegativeSelector}
          />
        </BottomContent>

        <Button
          title={meal ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={handleFeedbackNavigation}
        />
      </BottomContainer>
    </Container>
  );
}