import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Error from './Pages/Error';
import Home from './Pages/Home';
import PieChart from './Pages/PieChart';
import Donation from './Pages/Donation';
import DonationInfo from './components/DonationInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element : <Home></Home>,
      },
      // d
      {
        path: '/donation',
        element : <Donation></Donation>,
      },
      {
        path: '/donationinfo/:id',
        element : <DonationInfo></DonationInfo>,
        loader: () => fetch('data.json')
      },
      {
        path: '/statistics',
        element : <PieChart></PieChart>,
      }
    ] 
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
