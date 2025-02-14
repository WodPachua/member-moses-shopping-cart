import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { ProductType } from "../Types";
import { useCart } from '../CartContext';

const AddToCart = ({ cart }: { cart: ProductType[] }) => {
  const { dispatch } = useCart();

  const Increase = (productId: number ) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
  };

  const Decrease = (productId: number ) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
  };

  const deleteCartItem = (productId: number ) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <Box>
      {cart.length > 0 ? (
        <>
          <Box>
            <TableContainer sx={{ minWidth: 350 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                          <Avatar
                            src={product.photo}
                            alt={product.photo}
                            sx={{
                              borderRadius: "10px",
                              height: "80px",
                              width: "90px",
                            }}
                          />
                          <Box>
                            <Typography variant="h6">
                              {product.title}
                            </Typography>{" "}
                            <Typography color="textSecondary" variant="body1">
                              {product.category}
                            </Typography>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => deleteCartItem(Number(product.id))}
                            >
                              <IconTrash size="1rem" />
                            </IconButton>
                          </Box>
                        </Stack>
                      </TableCell>

                      <TableCell>
                        <ButtonGroup
                          size="small"
                          color="success"
                          aria-label="small button group"
                        >
                          <Button
                            onClick={() => Decrease(Number(product.id))}
                            disabled={product.qty < 2}
                          >
                            <IconMinus stroke={1.5} size="0.8rem" />
                          </Button>
                          <Button>{product.qty}</Button>
                          <Button onClick={() => Increase(Number(product.id))}>
                            <IconPlus stroke={1.5} size="0.8rem" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="h6">
                          ${product.price * product.qty}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <img src={'/images/empty-shopping-cart.svg'} alt="cart" width={200} />
          <Typography variant="h5" mb={2}>
            Cart is Empty
          </Typography>
          <Button
            component={Link}
            to="/browse"
            variant="contained"
          >
            Go back to Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;