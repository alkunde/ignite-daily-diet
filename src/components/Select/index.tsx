import { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Status } from './styles';

type Props = TouchableOpacityProps & {
  type: 'POSITIVE' | 'NEGATIVE';
  selected: boolean;
}

export function Select({
  type,
  selected,
  ...rest
}: Props) {
  console.log(selected);
  const label = useMemo(() => {
    return type === 'POSITIVE' ? 'Sim' : 'Não'
  }, [type]);

  return (
    <Container
      type={type}
      selected={selected}
      {...rest}
    >
      <Status type={type} />

      <Title>
        {label}
      </Title>
    </Container>
  );
}