import { TouchableOpacityProps } from 'react-native';

import { AddIcon, Container, EditIcon, RemoveIcon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: 'add' | 'edit' | 'remove';
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
      {icon && icon === 'add' && <AddIcon type={type} />}

      {icon && icon === 'edit' && <EditIcon type={type} />}

      {icon && icon === 'remove' && <RemoveIcon type={type} />}

      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}