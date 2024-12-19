import { Box } from '@mui/material';
import PageContainer from '../Shared/PageContainer';
import Cart from './Cart';
import ChildCard from '../Shared/ChildCard';
import { useCart } from '../CartContext';

const Checkout = () => {
  const { state } = useCart();

  return (
    <PageContainer title="Checkout" description="this is Checkout">
      {/* breadcrumb */}
      <ChildCard>
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}
        <Box p={3} flexGrow={1}>
          <Cart cart={state.cart}/>
        </Box>
      </ChildCard>
    </PageContainer>
  );
};

export default Checkout;