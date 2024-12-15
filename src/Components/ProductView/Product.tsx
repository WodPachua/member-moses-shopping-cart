// import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ChildCard from '../Shared/ChildCard';
import ProductCarousel from './ProductCarousel';
import ProductDetail from './ProductDetail';
import ProductDesc from './ProductDesc';
// import ProductsData from '../../api/ProductsData';
import { ProductType } from '../Types';

interface ProductProps {
  productsData: ProductType[];
}

const Product = ({ productsData }: ProductProps) => {
  const { productId } = useParams();
  const product: ProductType | undefined = productsData.find((product) => product.id === parseInt(productId || '0'));

  if (!product) {
    return <Navigate to="/error" />;
  }
  return (
    <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' }, margin: '70px auto 0 auto', padding: '20px', overflowY: 'auto' }}>
      <Grid item xs={12} sm={12} lg={12} >
        <ChildCard>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={6}>
              <ProductCarousel product={product} />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <ProductDetail product={product} />
            </Grid>
          </Grid>
        </ChildCard>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} >
        <ProductDesc product={product} />
      </Grid>
    </Grid>
  );
};

export default Product;