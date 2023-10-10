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

export const DateText = styled.Text`
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.SIZES.TITLE_S}px;
    font-family: ${theme.FONTS.BOLD};
    background-color: ${theme.COLORS.GRAY_700};
  `};
  padding-top: 32px;
  padding-bottom: 8px;
`;