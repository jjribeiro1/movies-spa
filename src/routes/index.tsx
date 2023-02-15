import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { ManageGenres } from '../pages/Manage-Genres';
import { ManageMovies } from '../pages/manage-Movies';
import { ManageStreamings } from '../pages/Manage-Streamings';
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
  },
  {
    path: '/manage-streamings',
    element: <ManageStreamings />
  },
  {
    path: '/manage-movies',
    element: <ManageMovies />
  }
]);
