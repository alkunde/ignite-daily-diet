import { useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import positiveImg from '@assets/positive.png';
import negativeImg from '@assets/negative.png';

import { Button } from '@components/Button';

import { Container, Title, Subtitle, Image, SubtitleBold } from './styles';

type RouteParams = {
  positive: boolean;
}

export function Feedback() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { positive } = route.params as RouteParams;

  function handleNavigate() {
    navigate('home');
  }

  const title = useMemo(() => {
    return positive
      ? "Continue assim!"
      : "Que pena!"
  }, [positive]);

  const firstMsg = useMemo(() => {
    return positive
      ? "Você continua "
      : "Você "
  }, [positive]);

  const secondMsg = useMemo(() => {
    return positive
      ? "Muito bem!"
      : "dessa vez, mas continue se esforçando e não desista!"
  }, [positive]);

  const boldMsg = useMemo(() => {
    return positive
      ? "dentro da dieta. "
      : "saiu da dieta "
  }, [positive]);

  return (
    <Container>
      <Title type={positive ? 'POSITIVE' : 'NEGATIVE'}>
        {title}
      </Title>

      <Subtitle>
        {firstMsg}
        <SubtitleBold>{boldMsg}</SubtitleBold>
        {secondMsg}
      </Subtitle>

      <Image source={positive ? positiveImg : negativeImg} />

      <Button title="Ir para página inicial" onPress={handleNavigate} />
    </Container>
  );
}