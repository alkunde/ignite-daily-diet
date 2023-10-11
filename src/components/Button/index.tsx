import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, ButtonIcon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({
  title,
  icon,
  type = 'PRIMARY',
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <ButtonIcon name={icon} />

      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}