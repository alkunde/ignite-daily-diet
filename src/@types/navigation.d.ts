import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_meal: {
        meal?: MealStorageDTO;
      };
      feedback: {
        positive: boolean;
      };
      meal_detail: {
        id: string;
      };
    }
  }
}