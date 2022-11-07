
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import SignUp from '../../components/Pages/SignUp/SignUp';
import Main from '../../Layouts/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

    ]
  },
]);


export default router