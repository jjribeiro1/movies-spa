import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { ManageGenres } from '../pages/Manage-Genres';
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
  {
    path: '/manage-genres',
    element: <ManageGenres />
  }
]);
