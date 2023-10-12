import { Container, AmountText, DescriptionText } from './styles';

type Props = {
  amount: string;
  description: string;
  status?: 'POSITIVE' | 'NEGATIVE' | 'DEFAULT';
}

export function StatsCard({
  amount,
  description,
  status = 'DEFAULT',
}: Props) {
  return (
    <Container status={status}>
      <AmountText>
        {amount}
      </AmountText>

      <DescriptionText>
        {description}
      </DescriptionText>
    </Container>
  );
}