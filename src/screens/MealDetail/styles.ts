import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type Props = {
  status: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContainer = styled.View`
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

export const BottomContainer = styled(SafeAreaView)`
  flex: 1;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  top: 120px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-bottom: 16px;
  padding-right: 24px;
  padding-left: 24px;
`;

export const BottomContent = styled.View`
  flex: 1;
  align-items: flex-start;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TagStatus = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.SIZES.BODY_S}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;