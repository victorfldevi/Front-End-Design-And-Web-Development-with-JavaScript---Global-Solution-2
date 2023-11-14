import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Login from './routers/Login.jsx'
import Conteudo from './routers/Conteudo.jsx'
import StyloGeral from './css/global.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Login /> },
      { path: '/conteudo', element: <Conteudo /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <StyloGeral />
  </>
)
