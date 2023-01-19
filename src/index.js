import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {loader as AppLoader} from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout, {loader as layoutLoader} from './components/Layout';
import Categoria, {loader as CategoriaLoader} from './components/Categoria';
import ItemDetailContainer, {loader as ItemDetailLoader} from './components/ItemDetailContainer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    loader: layoutLoader,
    children:[
      {
        index: true,
        element: <App />,
        loader: AppLoader
      },
      {
        path: '/categoria/:id',
        element: <Categoria/>,
        loader: CategoriaLoader,
      },
      {
        path: '/producto/:id',
        element: <ItemDetailContainer/>,
        loader: ItemDetailLoader
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
