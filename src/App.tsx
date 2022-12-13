import { lazy, Suspense, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle, darkTheme } from './config/theme';

import { Box, Container } from './components/atoms/Laytout';
import DarkModeButton from './components/molecules/DarkModeButton';

const WelcomePage = lazy(() => import('./pages/Welcome'));
const SigninPage = lazy(() => import('./pages/Signin'));
const SignupPage = lazy(() => import('./pages/Signup'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

function App() {
  const [isDark, setDark] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<h1>Loading....</h1>}>
          <RouterProvider router={router} />
        </Suspense>
        <DarkModeButton onChange={setDark} isDark={isDark} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
