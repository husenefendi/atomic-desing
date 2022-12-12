import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Button, ButtonOutlined } from './components/atoms/Button';
import { Container } from './components/atoms/Laytout';
import theme, { GlobalStyle } from './config/theme';

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<h1>Loading....</h1>}>
          <RouterProvider router={router} />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}

export default App;
