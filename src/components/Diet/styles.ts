import styled, { css } from 'styled-components/native';

export const Container = styled.View`
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  margin-bottom: 4px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 8px;
`;