export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_meal: undefined;
      feedback: {
        positive: boolean;
      };
      meal_detail: {
        id: string;
      };
    }
  }
}