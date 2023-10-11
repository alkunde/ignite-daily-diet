import { mealGetAll } from './mealGetAll';

export async function mealGetById(id: string) {
  try {
    const storage = await mealGetAll();

    const meal = storage.filter(item => item.id === id);
    return meal;
  } catch(error) {
    throw error;
  }
}