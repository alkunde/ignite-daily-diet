import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatsCard } from '@components/StatsCard';

import { mealGetAll } from '@storage/meal/mealGetAll';

import {
  Container,
  Header,
  HeaderContent,
  BackButton,
  BackIcon,
  PercentText,
  DescriptionText,
  BottomContainer,
  BottomContent,
  BottomContentTitle,
  FakeContent,
  Separator,
} from './styles';

export function Statistics() {
  const { goBack } = useNavigation();

  // const [data, setData] = useState<MealStorageDTO[]>([]);
  const [total, setTotal] = useState(0);
  const [inDiet, setInDiet] = useState(0);
  const [outDiet, setOutDiet] = useState(0);
  const [percent, setPercent] = useState(0);

  // const total = useMemo(() => {
  //   return data.length;
  // }, [data]);

  // const inDiet = useMemo(() => {
  //   return data.filter(item => item.status).length;
  // }, [data]);

  // const outDiet = useMemo(() => {
  //   return data.filter(item => !item.status).length;
  // }, [data]);

  // const percent = useMemo(() => {
  //   return inDiet / data.length;
  // }, [inDiet]);

  async function fetchMeals() {
    const data = await mealGetAll();
    const t = data.length;
    const inD = data.filter(item => item.status).length;
    const outD = t - inD;
    setPercent(inD / t);
    setTotal(t);
    setInDiet(inD);
    setOutDiet(outD);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Container status={percent >= 0.5}>
      <Header>
        <HeaderContent>
          <PercentText>
            {percent.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: 'percent',
            })}
          </PercentText>

          <DescriptionText>
            das refeições dentro da dieta
          </DescriptionText>

          <BackButton onPress={goBack}>
            <BackIcon status={percent >= 0.5} />
          </BackButton>
        </HeaderContent>
      </Header>

      <BottomContainer>
        <BottomContentTitle>
          Estatísticas gerais
        </BottomContentTitle>

        <BottomContent>
          <FakeContent>
            <StatsCard
              amount="4"
              description="melhor sequência de pratos dentro da dieta"
            />
          </FakeContent>

          <FakeContent>
            <StatsCard
              amount={total.toString()}
              description="refeições registradas"
            />
          </FakeContent>

          <FakeContent>
            <StatsCard
              amount={inDiet.toString()}
              description="refeições dentro da dieta"
              status="POSITIVE"
            />

            <Separator />

            <StatsCard
              amount={outDiet.toString()}
              description="refeições fora da dieta"
              status="NEGATIVE"
            />
          </FakeContent>
        </BottomContent>
      </BottomContainer>
    </Container>
  );
}