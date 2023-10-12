import logoImg from '@assets/logo.png';

import { Container, Logo, Photo } from './styles';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <Photo source={{ uri: 'https://github.com/alkunde.png' }} />
    </Container>
  );
}