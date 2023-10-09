import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, ResumeDescription, ResumeTitle } from './styles';

export function Resume({...rest}: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <ResumeTitle>
        90,86 %
      </ResumeTitle>

      <ResumeDescription>
        das refeições dentro da dieta
      </ResumeDescription>

      <Icon />
    </Container>
  );
}