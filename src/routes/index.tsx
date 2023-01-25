import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profiles } from '../pages/Profiles';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/profile',
    element: <Profiles />,
  },

  {
    path: '/home',
    element: <Home />,
  },
]);
