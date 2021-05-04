import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}))`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;

  color: #fff;
`;
