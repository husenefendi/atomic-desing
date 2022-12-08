import { ReactNode } from 'react';
import styled from 'styled-components';

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
  background-color: pink;
`;
