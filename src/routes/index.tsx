import { createBrowserRouter } from 'react-router-dom';
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
]);
