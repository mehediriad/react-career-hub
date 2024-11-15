import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/applied",
        element:<AppliedJob/>,
        loader:()=>fetch('jobs.json')
      },
      {
        path:"/jobs/:jobId",
        element:<JobDetails/>,
        loader:()=>fetch('jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
