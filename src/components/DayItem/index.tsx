import { Meal } from '@components/Meal';

import { Container, DateText } from './styles';

type Props = {
  data: string;
  items: string[];
}

export function DayItem({ data, items }: Props) {
  return (
    <Container>
      <DateText>{data}</DateText>

      {items.map(item => (
        <Meal />
      ))}
    </Container>
  );
}