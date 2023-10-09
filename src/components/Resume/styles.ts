import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const ResumeTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.SIZES.TITLE_G}px;
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
`;

export const ResumeDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.SIZES.BODY_S}px;
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
  text-align: center;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;