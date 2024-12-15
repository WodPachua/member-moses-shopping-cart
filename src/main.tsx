import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error.tsx';
import Home from './Components/Home.tsx';
import Shop from './Components/Shop.tsx';
import FAQS from './Components/FAQs.tsx';
import Product from './Components/ProductView/Product.tsx';
import axios from './api/axios';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home productsData={products}/>,
          errorElement: <Error />
        },
        {
          path: "browse",
          element: <Shop productsData={products} />,
          errorElement: <Error />
        },
        {
          path: "product/:productId",
          element: <Product productsData={products}/>,
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

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);