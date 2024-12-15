import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IconCheck, IconMinus, IconPlus } from "@tabler/icons-react";
import AlertCart from "../AlertCart";
import { ProductType } from '../Types';
import { Link } from "react-router-dom";

interface ProductDetailProps {
    product: ProductType;
  }

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const theme = useTheme();

  const [scolor, setScolor] = useState(product ? product.colors[0] : "");
  const setColor = (e) => {
    setScolor(e);
  };

  const [count, setCount] = useState(1);
  const [cartalert, setCartalert] = useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };

  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            <Chip label="In Stock" color="success" size="small" />
            <Typography color="textSecondary" variant="caption" ml={1} textTransform="capitalize">
              {product.category.join(", ")}
            </Typography>
          </Box>
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            {product.description}
          </Typography>
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box component={"small"} color={theme.palette.text.secondary} sx={{ textDecoration: "line-through" }}>
              ${product.salesPrice}
            </Box>{" "}
            ${product.price}
          </Typography>
          <Stack direction={"row"} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            <Typography>(236 reviews)</Typography>
          </Stack>
          <Divider />
          <Stack py={4} direction="row" alignItems="center">
            <Typography variant="h6" mr={1}>
              Colors:
            </Typography>
            <Box>
              {product.colors.map((color) => (
                <Fab
                  color="primary"
                  sx={{
                    transition: "0.1s ease-in",
                    scale: scolor === color ? "0.9" : "0.7",
                    backgroundColor: `${color}`,
                    "&:hover": {
                      backgroundColor: `${color}`,
                      opacity: 0.7,
                    },
                  }}
                  size="small"
                  key={color}
                  onClick={() => setColor(color)}
                >
                  {scolor === color ? <IconCheck size="1.1rem" /> : ""}
                </Fab>
              ))}
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" pb={5}>
            <Typography variant="h6" mr={4}>
              QTY:
            </Typography>
            <Box>
              <ButtonGroup size="small" color="secondary" aria-label="small button group">
                <Button onClick={() => setCount(count < 2 ? count : count - 1)}>
                  <IconMinus size="1.1rem" />
                </Button>
                <Button>{count}</Button>
                <Button onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} lg={4} md={6}>
              <Link to="/browse">
                <Button color="primary" size="large" fullWidth variant="contained" onClick={handleClick}>
                    Back
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="error"
                size="large"
                fullWidth
                variant="contained"
                onClick={handleClick}
                sx={{ whiteSpace: "nowrap" }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        "No product"
      )}
    </Box>
  );
};

export default ProductDetail;