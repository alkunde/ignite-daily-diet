import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.COLORS.GRAY_100,
}))``;