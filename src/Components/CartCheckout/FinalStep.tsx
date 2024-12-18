import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCart } from '../CartContext';



const FinalStep = () => {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: 'RESET_CART', payload: 0 });
  }, [dispatch]);

  return (
    <>
      {/* <Box my={3}> */}
        <Box my={3} textAlign="center" p={3} display='flex' flexDirection='column'>
            <Box display="flex" alignItems="center" justifyContent="center">
            <img src="/images/payment-complete.gif" alt="payment" width={200} />
            <Box ml={2}>
              <Typography variant="h5">Thank you for your purchase!</Typography>
              <Typography variant="h6" mt={1} mb={4} color="primary">
              Your order id: <span style={{ color: '#B99095' }}>GNS-dbe0d35f5f5d</span>
              </Typography>
            </Box>
            </Box>
            <br />
            <br />
          <Typography variant="body2" color='success'>
            We will send you a notification within 2 days when it ships.
          </Typography>
        </Box>
      {/* </Box> */}
    </>
  );
};

export default FinalStep;
