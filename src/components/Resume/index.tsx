import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Icon, ResumeDescription, ResumeTitle } from './styles';

type Props = TouchableOpacityProps & {
  total: number;
  totalInDiet: number;
}

export function Resume({total, totalInDiet, ...rest}: Props) {
  const { COLORS } = useTheme();

  return (
    <Container status={totalInDiet / total >= 0.5} {...rest}>
      <ResumeTitle>
        {(totalInDiet / total).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'percent',
        })}
      </ResumeTitle>

      <ResumeDescription>
        das refeições {totalInDiet / total >= 0.5 ? 'dentro' : 'fora'} da dieta
      </ResumeDescription>

      <Icon color={totalInDiet / total >= 0.5 ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
    </Container>
  );
}