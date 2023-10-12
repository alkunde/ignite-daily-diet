import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

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
  const { COLORS, FONTS, SIZES } = useTheme();

  const color = status === 'POSITIVE'
    ? COLORS.GREEN_LIGHT
    : status === 'NEGATIVE'
      ? COLORS.RED_LIGHT
      : COLORS.GRAY_600;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: color, borderRadius: 8, marginBottom: 12, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: COLORS.GRAY_100, fontSize: SIZES.TITLE_M, fontFamily: FONTS.BOLD }}>
        {amount}
      </Text>

      <Text style={{ textAlign: 'center', color: COLORS.GRAY_200, fontSize: SIZES.BODY_S, fontFamily: FONTS.REGULAR }}>
        {description}
      </Text>
    </View>
  );
}