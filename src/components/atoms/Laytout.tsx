import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-sm bg-red-100 h-screen relative overflow-hidden">{children}</div>
  );
};

export default Layout;
