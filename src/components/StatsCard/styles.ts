import styled, { css } from 'styled-components/native';

type Props = {
  status: 'POSITIVE' | 'NEGATIVE' | 'DEFAULT';
}

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${({ theme, status }) => status === 'POSITIVE' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ theme, status }) => status === 'NEGATIVE' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `};
`;

export const AmountText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_M}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.SIZES.BODY_S}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  text-align: center;
`;