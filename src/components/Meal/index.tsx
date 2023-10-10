import { MealPresentation } from '@storage/meal/MealStorageDTO';

import {
  Container,
  HourText,
  Separator,
  DescriptionText,
  Status,
} from './styles';

type Props = {
  item: MealPresentation;
}

export function Meal({ item }: Props) {
  return (
    <Container>
      <HourText>{item.hour}</HourText>

      <Separator />

      <DescriptionText>{item.name}</DescriptionText>

      <Status status={item.status} />
    </Container>
  );
}