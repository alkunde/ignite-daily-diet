import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.SIZES.BODY_M}px;
  `};
`;

export const ButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;