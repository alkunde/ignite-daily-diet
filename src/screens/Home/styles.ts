import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 24px;
`;

export const TitleList = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.SIZES.BODY_M}px;
    font-family: ${theme.FONTS.REGULAR};
  `};
  margin-bottom: 8px;
`;