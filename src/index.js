import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Visualization from './Components/Visualization';
import WorkoutDetails from './Components/WorkoutDetails';
import Main from './Components/Main';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main /> ,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/workoutdetails",
        element: <WorkoutDetails />
      },
      {
        path: "/visualizations",
        element: <Visualization />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
