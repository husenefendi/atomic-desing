import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Button, ButtonOutlined } from './components/atoms/Button';
import Layout from './components/atoms/Laytout';
import theme from './config/theme';

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
      <Suspense fallback={<h1>Loading....</h1>}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
