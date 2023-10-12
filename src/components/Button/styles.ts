import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';

type Props = {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  ${({ theme, type }) => type === 'PRIMARY' && css`
    background-color: ${theme.COLORS.GRAY_200};
  `};

  ${({ theme, type }) => type === 'SECONDARY' && css`
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_200};
  `};
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.BODY_M}px;
  `};

  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
`;

export const AddIcon = styled(Plus).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))`
  margin-right: 12px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))`
  margin-right: 12px;
`;

export const RemoveIcon = styled(Trash).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))`
  margin-right: 12px;
`;