import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { MealDetail } from '@screens/MealDetail';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='home'
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="statistics"
        component={Statistics}
      />
      <Screen
        name="new_meal"
        component={NewMeal}
      />
      <Screen
        name="feedback"
        component={Feedback}
        options={{ gestureEnabled: false }}
      />
      <Screen
        name="meal_detail"
        component={MealDetail}
      />
    </Navigator>
  );
}