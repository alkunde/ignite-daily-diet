import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  status: boolean;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  border-radius: 6px;
  border-width: 1px;
  align-items: center;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px 12px;
  margin-bottom: 8px;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.SIZES.BODY_XS}px;
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Separator = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`

export const DescriptionText = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.SIZES.BODY_M}px;
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, status}) => status ? theme.COLORS.GREEN_MEDIUM : theme.COLORS.RED_MEDIUM};
`;