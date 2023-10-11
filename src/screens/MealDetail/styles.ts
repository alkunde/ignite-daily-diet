import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

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
  text-align: center;
`;

export const NameText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  font-size: 20px;
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.SIZES.BODY_M}px;
  `};
  margin-top: 8px;
`;

export const DateTimeHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.SIZES.TITLE_XS}px;
  `};
  margin-top: 24px;
`;

export const DateTimeText = styled.Text`
  margin-top: 8px;
`;

export const TagContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TagStatus = styled.View``;

export const TagText = styled.Text``;