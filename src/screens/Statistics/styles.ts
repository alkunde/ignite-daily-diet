import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, status }) => ({
  size: 24,
  color: status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
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