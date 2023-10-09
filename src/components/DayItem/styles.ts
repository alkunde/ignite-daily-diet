import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 32px;
`;

export const DateText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.SIZES.TITLE_S}px;
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-bottom: 8px;
`;