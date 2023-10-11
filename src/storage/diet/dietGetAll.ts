import { MealPresentation, MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealGetAll } from "@storage/meal/mealGetAll";

type DietPresentation = {
  date: string;
  data: MealPresentation[];
}

export async function dietGetAll() {
  try {
    const storage = await mealGetAll();

    storage.sort((a, b) => {
      const compare = a.date.localeCompare(b.date);

      if (compare === 0) {
        return a.hour.localeCompare(b.hour);
      }

      return compare;
    });

    const response: DietPresentation[] = [];
    let actual: MealStorageDTO;
    let count = -1;
    storage.map(item => {
      if (!actual || item.date !== actual.date) {
        actual = item;

        const newItem: DietPresentation = {
          data: [item],
          date: item.date,
        }
        response.push(newItem);
        count++;
      } else {
        response[count].data.push(item);
      }
    });

    return response;
  } catch(error) {
    throw error;
  }
}