import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const HeaderContent = styled.View``;

export const BackButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_S}px;
    color: ${theme.COLORS.GRAY_100};
  `};
  padding: 24px;
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 40px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  margin-bottom: 4px;
`;