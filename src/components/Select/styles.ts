import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  type: 'POSITIVE' | 'NEGATIVE';
}

type ActiveProps = Props & {
  selected: boolean;
}

export const Container = styled(TouchableOpacity)<ActiveProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${({ selected }) => selected && css`
    border-width: 1px;
  `};

  ${({ theme, type, selected }) => type === 'POSITIVE' && selected && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
    border-color: ${theme.COLORS.GREEN_DARK};
  `};

  ${({ theme, type, selected }) => type === 'NEGATIVE' && selected && css`
    background-color: ${theme.COLORS.RED_LIGHT};
    border-color: ${theme.COLORS.RED_DARK};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
  border-radius: 4px;
`;