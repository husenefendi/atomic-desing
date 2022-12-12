import styled from 'styled-components';
import {
  color,
  ColorStyleProps,
  width,
  WidthProps,
  BackgroundColorProps,
  background,
  DisplayProps,
  display,
} from 'styled-system';

interface IButton
  extends ColorStyleProps,
    WidthProps,
    BackgroundColorProps,
    DisplayProps {}

export const Button = styled.button<IButton>`
  border: 1px solid palevioletred;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  ${color}
  ${width}
  ${background}
  ${display}
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
