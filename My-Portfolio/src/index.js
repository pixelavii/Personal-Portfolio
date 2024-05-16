import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  } 
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
