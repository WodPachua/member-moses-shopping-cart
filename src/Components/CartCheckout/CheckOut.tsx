import { Box } from '@mui/material';
import PageContainer from '../Shared/PageContainer';
import Cart from './Cart';
import ChildCard from '../Shared/ChildCard';
import { ProductType } from '../Types';

interface CheckoutProps {
  cart: ProductType[];
}

const Checkout = ({ cart }: CheckoutProps) => {
  return (
    <PageContainer title="Checkout" description="this is Checkout">
      {/* breadcrumb */}
      <ChildCard>
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}
        <Box p={3} flexGrow={1}>
          <Cart cart={cart}/>
        </Box>
      </ChildCard>
    </PageContainer>
  );
};

export default Checkout;
