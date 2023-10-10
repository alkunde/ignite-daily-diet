import { TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps & {
  size?: number;
}

export function Input({ size = 48, ...rest }: Props) {
  return (
    <Container
      size={size}
      {...rest}
    />
  );
}