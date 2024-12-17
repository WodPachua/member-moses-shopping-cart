'use client'
import React from 'react';
import { sum } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddToCart from './AddToCart';
import { IconArrowBack } from '@tabler/icons-react';
import HorizontalStepper from './HorizontalStepper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import { ProductType } from '../Types';

interface CartProps {
  cart: ProductType[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  const checkout = cart.slice(0, 3);
  const steps = ['Cart', 'Billing & address', 'Payment'];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const total = sum(checkout.map((product: ProductType) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));

  return (
    <Box>
      <HorizontalStepper
        steps={steps}
        handleReset={handleReset}
        activeStep={activeStep}
        finalStep={<FinalStep />}
      >
        {/* ------------------------------------------- */}
        {/* Step1 */}
        {/* ------------------------------------------- */}
        {activeStep === 0 ? (
          <>
            <Box my={3}>
              <AddToCart cart={checkout}/>
            </Box>
            {checkout.length > 0 ? (
              <>
                {/* ------------------------------------------- */}
                {/* Cart Total */}
                {/* ------------------------------------------- */}
                <FirstStep total={total} Discount={Discount} />
                <Stack direction={'row'} justifyContent="space-between">
                  <Button
                    color="secondary"
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button variant="outlined" onClick={handleNext}>
                    Checkout
                  </Button>
                </Stack>
              </>
            ) : (
              ''
            )}
          </>
        ) : activeStep === 1 ? (
          <>
            {/* ------------------------------------------- */}
            {/* Step2 */}
            {/* ------------------------------------------- */}
            <SecondStep nexStep={handleNext} />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Button color="warning" variant="outlined" disabled={activeStep !== 1} onClick={handleBack}>
              <IconArrowBack />Back
              </Button>
              <Button color="primary" variant="outlined" >
                Select Address to go next
              </Button>
            </Stack>
          </>
        ) : (
          <>
            {/* ------------------------------------------- */}
            {/* Step3 */}
            {/* ------------------------------------------- */}
            <ThirdStep />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Button color="primary" variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                <IconArrowBack /> Back
              </Button>
              <Button onClick={handleNext} size="large" variant="outlined">
                Complete Order
              </Button>
            </Stack>
          </>
        )}
      </HorizontalStepper>
    </Box>
  );
};

export default Cart;
