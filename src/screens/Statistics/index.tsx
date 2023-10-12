import { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { StatsCard } from '@components/StatsCard';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealGetAll } from '@storage/meal/mealGetAll';

import {
  Container,
  Header,
  HeaderContent,
  BackButton,
  BackIcon,
  PercentText,
  DescriptionText,
} from './styles';
import theme from 'src/theme';

export function Statistics() {
  const { COLORS, FONTS, SIZES } = useTheme();
  const { goBack } = useNavigation();

  const [data, setData] = useState<MealStorageDTO[]>([]);

  const percent = useMemo(() => {
    return 49;
  }, [data]);

  const total = useMemo(() => {
    return data.length;
  }, [data]);

  const inDiet = useMemo(() => {
    return data.filter(item => item.status).length;
  }, [data]);

  async function fetchMeals() {
    const data = await mealGetAll();
    setData(data);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Container status={percent >= 50}>
      <Header>
        <HeaderContent>
          <PercentText>
            {percent}
          </PercentText>

          <DescriptionText>
            das refeições dentro da dieta
          </DescriptionText>

          <BackButton onPress={goBack}>
            <BackIcon />
          </BackButton>
        </HeaderContent>
      </Header>

      <SafeAreaView style={{ flex: 1, top: 190, position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: COLORS.GRAY_700, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 24 }}>
        <Text style={{ textAlign: 'center', fontSize: SIZES.TITLE_XS, fontFamily: FONTS.BOLD, color: COLORS.GRAY_100, marginBottom: 24 }}>
          Estatísticas gerais
        </Text>

        <View>
          <View style={{ flexDirection: 'row' }}>
            <StatsCard
              amount="4"
              description="melhor sequência de pratos dentro da dieta"
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <StatsCard
              amount={total.toString()}
              description="refeições registradas"
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <StatsCard
              amount={inDiet.toString()}
              description="refeições dentro da dieta"
              status="POSITIVE"
            />

            <View style={{ width: 12 }} />

            <StatsCard
              amount="77"
              description="refeições fora da dieta"
              status="NEGATIVE"
            />
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
}