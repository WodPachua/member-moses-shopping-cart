import { useRouteError } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function Error() {
  const error = useRouteError() as { status?: string; statusText?: string }

  return (
        <Box
          className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
          }}
        >
          <Box
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center"
            sx={{ maxWidth: 400, color: 'black' }}
          >
            <Typography variant="h4" gutterBottom>
            ⚠️ {error.status}: {error.statusText} 
            </Typography>
            <Typography variant="body1" gutterBottom>
              We’re not quite sure what went wrong. You can go try again, or return to Home.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="mt-4"
              href="/"
            >
              Return to Home
            </Button>
          </Box>
        </Box>
  );
}

export default Error;