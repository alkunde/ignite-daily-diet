import styled from 'styled-components/native';

type Props = {
  type: 'POSITIVE' | 'NEGATIVE';
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 32px;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.SIZES.TITLE_M}px;
  color: ${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;
`;

export const SubtitleBold = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 224px;
  height: 288px;

  margin-top: 40px;
  margin-bottom: 32px;
`;