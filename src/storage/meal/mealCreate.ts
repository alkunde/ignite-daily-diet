import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealGetAll } from './mealGetAll';

export async function mealCreate(meal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    const filtered = storedMeals.filter(item => item.date === meal.date && item.hour === meal.hour);

    if (filtered) {
      throw new Error();
    }

    const storage = JSON.stringify([...storedMeals, meal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch(error) {
    throw error;
  }
}