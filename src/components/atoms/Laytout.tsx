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
} from 'styled-system';

interface IProps {
  children?: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-sm bg-red-100 h-screen relative overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;

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
    FlexDirectionProps {}
export const Box = styled.div<IBox>`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${display}
  ${flexDirection}
`;
