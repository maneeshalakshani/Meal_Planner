import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Login } from './components/Authentication/Login';
import { Register } from './components/Authentication/Register';
import { AddMeal } from './pages/AdMeal';
// import { Profile } from './pages/Profile';
import { ViewUsers } from './pages/ViewUsers';
import { User } from './pages/User';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />,},
  { path: '/login', element: <Login />,},
  { path: '/register', element: <Register />,},
  { path: '/addMeal', element: <AddMeal />,},
  // { path: '/profile', element: <Profile />,},
  { path: '/users', element: <ViewUsers />,},
  { path: '/user/:id', element: <User />,},
]);

export function Router() {
  return <RouterProvider router={router} />;
}
