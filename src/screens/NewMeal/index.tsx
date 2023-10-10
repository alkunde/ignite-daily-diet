import { useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Diet } from '@components/Diet';
import { Input } from '@components/Input';

import { mealCreate } from '@storage/meal/mealCreate';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import {
  Container,
  HeaderContent,
  BackButton,
  HeaderTitle,
  Content,
  Label,
} from './styles';

export function NewMeal() {
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState('Refeição');
  const [description, setDescription] = useState('Refeição de teste');
  const [mealDate, setMealDate] = useState('12.08.22');
  const [mealHour, setMealHour] = useState('08:00');
  const [mealType, setMealType] = useState('POSITIVE');

  async function handleFeedbackNavigation() {
    // if (name.trim().length === 0) {
    //   return Alert.alert('Aviso', 'Informe o nome da refeição');
    // }

    // if (description.trim().length === 0) {
    //   return Alert.alert('Aviso', 'Informe a descrição da refeição');
    // }

    // if (mealDate.trim().length === 0) {
    //   return Alert.alert('Aviso', 'Informe a data da refeição');
    // }

    // if (mealHour.trim().length === 0) {
    //   return Alert.alert('Aviso', 'Informe a hora da refeição');
    // }

    // if (mealType.trim().length === 0) {
    //   return Alert.alert('Aviso', 'Informe se a refeição está dentro ou fora da dieta');
    // }
    const newMeal: MealStorageDTO = {
      id: Date.now().toString(),
      name,
      description,
      date: mealDate,
      hour: mealHour,
      status: mealType === 'POSITIVE',
    };

    await mealCreate(newMeal);

    navigate('feedback', { positive: newMeal.status });
  }

  function handleClickPositiveSelector() {
    setMealType('POSITIVE');
  }

  function handleClickNegativeSelector() {
    setMealType('NEGATIVE');
  }

  return (
    <Container>
      <HeaderContent>
        <View>
          <HeaderTitle>
            Nova refeição
          </HeaderTitle>

          <BackButton onPress={goBack}>
            <ArrowLeft size={24} />
          </BackButton>
        </View>
      </HeaderContent>

      <Content>
        <View style={{ flex: 1 }}>
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
        </View>

        <Button
          title="Cadastrar refeição"
          onPress={handleFeedbackNavigation}
        />
      </Content>
    </Container>
  );
}