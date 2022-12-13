import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  color,
  display,
  DisplayProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  flexDirection,
  FlexDirectionProps,
  PositionProps,
  position,
  BackgroundColorProps,
  backgroundColor,
  background,
  BackgroundProps,
} from 'styled-system';

export const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  max-width: 100%;
  display: flex;
  background-color: ${props => props.theme.colors.grey};
  height: 100%;
`;

interface IBox
  extends DisplayProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    FlexDirectionProps,
    BackgroundProps,
    PositionProps {}

export const Box = styled.div<IBox>`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${display}
  ${flexDirection}
  ${position}
  ${background}
`;

export const BoxBackground = styled(Box)`
  position: relative;
  height: 100vh;
`;

export const FullHeightBackground = styled(BoxBackground)`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export default Box;
