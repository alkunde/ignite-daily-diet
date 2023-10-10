import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  size: number;
}

export const Container = styled(TextInput)<Props>`
  flex: 1;
  ${({ size }) => css`
    min-height: ${size}px;
    max-height: ${size}px;
  `};
  padding: 14px;
  margin-bottom: 24px;
  border-radius: 6px;  
  border-width: 1px;
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.SIZES.BODY_M}px;
  `};
`;