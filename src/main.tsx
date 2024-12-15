import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error.tsx';
import Home from './Components/Home.tsx';
import Shop from './Components/Shop.tsx';
import FAQS from './Components/FAQs.tsx';
import Product from './Components/ProductView/Product.tsx';

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
        path: "browse",
        element: <Shop onClick={()=>{}}/>,
        errorElement: <Error />
      },
      {
        path: "product/:productId",
        element: <Product />,
        errorElement: <Error />
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
