import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TiendaProvider } from './context/TiendaProvider'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Categoria from './components/Categoria';
import ItemDetailContainer from './components/ItemDetailContainer';
import './firebase/config'
import Carrito from './components/Carrito';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <App />
      },
      {
        path: '/categoria/:id',
        element: <Categoria/>
      },
      {
        path: '/producto/:id',
        element: 
        <TiendaProvider>
          <ItemDetailContainer/>
        </TiendaProvider>
      },
      {
        path: '/carrito',
        element: 
        <TiendaProvider>
          <Carrito/>
        </TiendaProvider>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
