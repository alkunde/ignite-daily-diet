import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealGetAll } from './mealGetAll';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealRemoveById(id: string) {
  try {
    const storage = await mealGetAll();

    const filtered = storage.filter(meal => meal.id !== id);
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch(error) {
    throw error;
  }
}