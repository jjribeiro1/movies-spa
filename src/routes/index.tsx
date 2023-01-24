import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/profile',
    element: <Profile />,
  },
]);
