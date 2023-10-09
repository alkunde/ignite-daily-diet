import logoImg from '@assets/logo.png';
import photo from '@assets/photo.jpeg';

import { Container, Logo, Photo } from './styles';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <Photo source={photo} />
    </Container>
  );
}