import { Platform } from 'react-native';

import { Select } from '@components/Select';

import { Container, Label, Options, Separator } from './styles';

type Props = {
  label: string;
  selected: string;
  onPositiveClick: () => void;
  onNegativeClick: () => void;
}

export function Diet({
  label,
  selected,
  onPositiveClick,
  onNegativeClick,
}: Props) {
  console.log(`${label} - ${selected} - ${Platform.OS}`);
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <Options>
        <Select
          type='POSITIVE'
          selected={selected === 'POSITIVE'}
          onPress={onPositiveClick}
        />

        <Separator />

        <Select
          type='NEGATIVE'
          selected={selected === 'NEGATIVE'}
          onPress={onNegativeClick}
        />
      </Options>
    </Container>
  );
}