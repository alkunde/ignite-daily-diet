import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    meals.sort((a, b) => {
      const compare = a.date.localeCompare(b.date);

      if (compare === 0) {
        return a.hour.localeCompare(b.hour);
      }

      return compare;
    });

    return meals;
  } catch(error) {
    throw error;
  }
}