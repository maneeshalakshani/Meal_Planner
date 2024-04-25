import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Login } from './components/Authentication/Login';
import { Register } from './components/Authentication/Register';
import { AddMeal } from './pages/AdMeal';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />,},
  { path: '/login', element: <Login />,},
  { path: '/register', element: <Register />,},
  { path: '/addMeal', element: <AddMeal />,},
]);

export function Router() {
  return <RouterProvider router={router} />;
}
