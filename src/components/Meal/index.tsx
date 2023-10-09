import { Container, HourText, Separator, DescriptionText, Status } from './styles';

export function Meal() {
  return (
    <Container>
      <HourText>20:00</HourText>

      <Separator />

      <DescriptionText>X-tudo</DescriptionText>

      <Status />
    </Container>
  );
}