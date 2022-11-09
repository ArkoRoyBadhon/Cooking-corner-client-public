
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import MyReviews from '../../components/Pages/MyReviews/MyReviews';
import ServiceDetail from '../../components/Pages/ServiceDetail/ServiceDetail';
import AllServices from '../../components/Pages/Services/AllServices/AllServices';
import SignUp from '../../components/Pages/SignUp/SignUp';
import Main from '../../Layouts/Main';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';

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
      {
        path: '/services',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/service/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },

    ]
  },
]);


export default router