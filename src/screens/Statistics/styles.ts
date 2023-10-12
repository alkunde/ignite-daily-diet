import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  status: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled(SafeAreaView)``;

export const HeaderContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 28px;
`;

export const PercentText = styled.Text`
  margin-top: 44px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_G}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.SIZES.BODY_S}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const BottomContainer = styled(SafeAreaView)`
  position: absolute;
  flex: 1;
  top: 190px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 0 24px;
`;

export const BottomContent = styled.View``;

export const BottomContentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.SIZES.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
  margin-bottom: 24px;
`;

export const FakeContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 12px;
`;

export const BackIcon = styled(ArrowLeft).attrs({
  size: 24,
})`
`;