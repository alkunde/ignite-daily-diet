export type MealPresentation = {
  id: string;
  hour: string;
  name: string;
  status: boolean;
}

export type MealStorageDTO = MealPresentation & {
  description: string;
  date: string;
}

export type DietPresentation = {
  date: string;
  data: MealPresentation[];
}