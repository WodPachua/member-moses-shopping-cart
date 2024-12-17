import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IconDeviceMobile } from '@tabler/icons-react';

const Myaddress = [
  {
    id: 1,
    name: 'Okello ocii',
    address: 'Tegwana, Gulu City',
    mobile: '0777777777',
  },
  {
    id: 2,
    name: 'Okello Ocii',
    address: 'Te Labolo, Gulu City',
    mobile: '0778888888',
  },
];

interface Props {
  nexStep: (event: React.SyntheticEvent | Event) => void;
}

const SecondStep = ({ nexStep }: Props) => {
  return (
    <>
      <Grid container spacing={3} mb={3} mt={1}>
        {Myaddress.map((address) => (
          <Grid item lg={4} xs={12} key={address.id}>
            <Paper variant="outlined" sx={{ p: 3, backgroundColor: 'transparent' }}>
              <Typography variant="h6" mb={2}>
              {address.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {address.address}
              </Typography>
              <Typography variant="h6" my={3} alignItems="center" display="flex" gap={1}>
              <IconDeviceMobile /> {address.mobile}
              </Typography>
              <Button variant="outlined" onClick={nexStep}>
              Deliver To this address
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SecondStep;
