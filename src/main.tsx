import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error.tsx';
import Home from './Components/Home.tsx';
import Shop from './Components/Shop.tsx';
import FAQS from './Components/FAQs.tsx';
import Product from './Components/Product.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "shop",
        element: <Shop />,
        errorElement: <Error />,
        children: [
          {
            path: "product/:id",
            element: <Product />
          }
        ]
      },
      {
        path: "faqs",
        element: <FAQS />,
        errorElement: <Error />
      }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
