import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface deliveryType {
  id: number;
  title: string;
  description: string;
}

interface paymentType {
  value: string;
  title: string;
  description: string;
  icons: string;
}

const Delivery: deliveryType[] = [
  {
    id: 1,
    title: "Free delivery",
    description: "Delivered within 7 days from now",
  },
  {
    id: 2,
    title: "Fast delivery (80$)",
    description: "Delivered within 2 days from now",
  },
];

const Payment: paymentType[] = [
  {
    value: "paypal",
    title: "Pay with Paypal",
    description:
      "You will be redirected to PayPal website to complete your purchase securely.",
    icons: '/images/paypal.svg',
  },
  {
    value: "credit_card",
    title: "Credit / Debit Card",
    description: "We support Mastercard, Visa, Discover and Stripe.",
    icons: '/images/mastercard.svg',
  },
  {
    value: "cash",
    title: "Cash on Delivery",
    description: "Pay with cash when your order is delivered.",
    icons: "",
  },
];

const ThirdStep = () => {
  const [selectedValue, setSelectedValue] = React.useState("Free delivery");

  const handleDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const [selectedPyament, setSelectedPyament] = React.useState("paypal");

  const handlePChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPyament(event.target.value);
  };

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Delivery Option */}
      {/* ------------------------------------------- */}
      <Paper variant="outlined" sx={{ p: 3, mt: 4, backgroundColor: 'transparent'}}>
        <Typography variant="h6">Delivery Option</Typography>
        <Grid container spacing={3} mt={1}>
          {Delivery.map((option) => (
            <Grid item lg={6} xs={12} key={option.id}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderColor:
                    selectedValue === option.title ? "#C4BDA9" : "",
                  backgroundColor:
                    selectedValue === option.title ? "#ebd9a4" : "#eee4c8",
                }}
              >
                <Stack direction={"row"} alignItems="center" gap={1}>
                  <Radio
                    checked={selectedValue === option.title}
                    onChange={handleDChange}
                    value={option.title}
                    name="radio-buttons"
                    inputProps={{ "aria-label": option.title }}
                  />
                  <Box>
                    <Typography variant="h6">{option.title}</Typography>
                    <Typography variant="subtitle2">
                      {option.description}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
      {/* ------------------------------------------- */}
      {/* Payment Option */}
      {/* ------------------------------------------- */}
      <Paper variant="outlined" sx={{ p: 3, mt: 4, backgroundColor: 'transparent' }}>
        <Typography variant="h6">Payment Option</Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid lg={8} xs={12} item>
            <Grid container spacing={3} mt={2}>
              {Payment.map((option) => (
                <Grid item lg={12} xs={12} key={option.value}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderColor:
                        selectedPyament === option.value ? "#C4BDA9" : "",
                      backgroundColor:
                        selectedPyament === option.value ? "#ebd9a4" : "#eee4c8",
                    }}
                  >
                    <Stack direction={"row"} alignItems="center" gap={1}>
                      <Radio
                        checked={selectedPyament === option.value}
                        onChange={handlePChange}
                        value={option.value}
                        name="radio-buttons"
                        inputProps={{ "aria-label": option.title }}
                      />
                      <Box>
                        <Typography variant="h6">{option.title}</Typography>
                        <Typography variant="subtitle2">
                          {option.description}
                        </Typography>
                      </Box>
                      <Box ml="auto">
                        {option.icons ? (
                          <img src={option.icons} alt="payment" />
                        ) : (
                          ""
                        )}
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid lg={4} xs={12} item>
            <img
              src={'/images/payment.svg'}
              alt="payment"
              style={{ height: "265px", width: "265px" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ThirdStep;
