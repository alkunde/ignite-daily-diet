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
  handlePress: () => void;
}

export function Meal({ item, handlePress }: Props) {
  return (
    <Container onPress={handlePress}>
      <HourText>{item.hour}</HourText>

      <Separator />

      <DescriptionText>{item.name}</DescriptionText>

      <Status status={item.status} />
    </Container>
  );
}