import styled from 'styled-components';

export const Button = styled.button`
  background-color: palevioletred;
  border: 1px solid palevioletred;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
  cursor: pointer;
`;

export const ButtonOutlined = styled(Button)`
  background-color: transparent;
  border: 1px solid palevioletred;
  color: palevioletred;
`;
export const ButtonIcon = styled(Button)`
  background-color: transparent;
  border: 0px transparent solid;
  color: inherit;
`;
