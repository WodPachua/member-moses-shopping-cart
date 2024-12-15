import React, { useState } from "react";
// import { filter, orderBy } from "lodash";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
// import { Theme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
// import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from "react-router-dom";
import ProductSearch from "./ProductSearch";
import { IconBasket, IconMenu2 } from "@tabler/icons-react";
import AlertCart from "./AlertCart";
// import emptyCart from "/public/images/products/empty-shopping-cart.svg";
import BlankCard from "./BlankCard";
import { ProductType } from "./Types";
// import Image from "next/image";
// import axios from "../apiMock/axios";
// import ProductsData  from '../api/ProductsData'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
  productsData: ProductType[];
}

const Shop = ({ onClick, productsData }: Props) => {
  const [products, setProducts] = useState<ProductType[]>(productsData);
  const [isLoading, setLoading] = useState(false);
  const [cartalert, setCartalert] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // const [filters, setFilters] = useState({
  //   category: "All",
  //   gender: "All",
  //   color: "All",
  //   price: "All"
  // });
  // const [sortBy, setSortBy] = useState("newest");
  // const [search, setSearch] = useState("");

  // const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const lgUp = true;

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("/api/products");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // const getVisibleProduct = (
  //   products: ProductType[],
  //   sortBy: string,
  //   filters: unknown,
  //   search: string
  // ) => {
  //   // SORT BY
  //   if (sortBy === "newest") {
  //     products = orderBy(products, ["created"], ["desc"]);
  //   }
  //   if (sortBy === "priceDesc") {
  //     products = orderBy(products, ["price"], ["desc"]);
  //   }
  //   if (sortBy === "priceAsc") {
  //     products = orderBy(products, ["price"], ["asc"]);
  //   }
  //   if (sortBy === "discount") {
  //     products = orderBy(products, ["discount"], ["desc"]);
  //   }

  //   // FILTER PRODUCTS
  //   if (filters.category !== "All") {
  //     products = products.filter((_product) =>
  //       _product.category.includes(filters.category)
  //     );
  //   }

  //   //FILTER PRODUCTS BY GENDER
  //   if (filters.gender !== "All") {
  //     products = filter(
  //       products,
  //       (_product) => _product.gender === filters.gender
  //     );
  //   }

  //   //FILTER PRODUCTS BY COLOR
  //   if (filters.color !== "All") {
  //     products = products.filter((_product) =>
  //       _product.colors.includes(filters.color)
  //     );
  //   }

  //   //FILTER PRODUCTS BY Search
  //   if (search !== "") {
  //     products = products.filter((_product) =>
  //       _product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //     );
  //   }

  //   //FILTER PRODUCTS BY Price
  //   if (filters.price !== "All") {
  //     const minMax = filters.price ? filters.price.split("-") : "";
  //     products = products.filter((_product) =>
  //       filters.price
  //         ? _product.price >= minMax[0] && _product.price <= minMax[1]
  //         : true
  //     );
  //   }

  //   return products;
  // };

  // const visibleProducts = getVisibleProduct(products, sortBy, filters, search);

  // const handleClick = () => {
  //   setCartalert(true);
  // };

  const handleClose = (event: unknown) => {
    if (event === "clickaway") {
      return;
    }
    setCartalert(false);
    //delete
    setProducts(products);
    setLoading(false);
  };

  // const addToCart = (product: ProductType) => {
  //   // Add product to cart logic here
  //   handleClick();
  // };

  return (
    <Box p={3} flexGrow={1}>
      <Box>
      {/* ------------------------------------------- */}
      {/* Header Detail page */}
      {/* ------------------------------------------- */}
      <Stack 
        style={{ margin: 'auto 20px' }} 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        pb={3} 
        position="sticky" 
        top={100} 
        zIndex={1} 
      >
        {lgUp ? (
          <Typography variant="h5">Products</Typography>
        ) : (
          <Fab onClick={onClick} color="primary" size="small">
        <IconMenu2 width="16" />
          </Fab>
        )}
        <Box>
          <ProductSearch onSearch={handleSearch} value={searchQuery}/>
        </Box>
      </Stack>

      {/* ------------------------------------------- */}
      {/* Page Listing product */}
      {/* ------------------------------------------- */}
      <Grid container spacing={3} style={{ marginTop: '70px', overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product) => (
              <Grid
                item
                xs={12}
                lg={3}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={product.id}
                sx={{ xs: 377, sm: 'auto' }}
              >
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      width={270}
                      height={300}
                      sx={{
                        borderRadius: (theme) => theme.shape.borderRadius / 5,
                      }}
                    ></Skeleton>
                  </>
                ) : (
                  <BlankCard className="hoverCard">
                    <Typography
                      component={Link}
                      to={`/product/${product.id}`}
                    >
                      {/* <img src={product.photo} alt="img" width={250} height={268} style={{ width: "100%" }} /> */}
                      <LazyLoadImage
                        alt={product.title}
                        effect="blur"
                        src={product.photo}
                        style={{ width: "auto" }} />
                    </Typography>
                    <Tooltip title="Add To Cart">
                      <Fab
                        size="small"
                        color="primary"
                        onClick={() => {}}
                        sx={{
                          bottom: "75px",
                          right: "15px",
                          position: "absolute",
                        }}
                      >
                        <IconBasket size="16" />
                      </Fab>
                    </Tooltip>
                    <CardContent sx={{ p: 3, pt: 2 }}>
                      <Typography variant="h6">{product.title}</Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={1}
                      >
                        <Stack direction="row" alignItems="center">
                          <Typography variant="h6">${product.price}</Typography>
                          <Typography
                            color="textSecondary"
                            ml={1}
                            sx={{ textDecoration: "line-through" }}
                          >
                            ${product.salesPrice}
                          </Typography>
                        </Stack>
                        <Rating
                          name="read-only"
                          size="small"
                          value={product.rating}
                          readOnly
                        />
                      </Stack>
                    </CardContent>
                  </BlankCard>
                )}
                <AlertCart
                  handleClose={handleClose}
                  openCartAlert={cartalert}
                />
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
              </Grid>
            ))}
          </>
        ) : (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12}>
                <Box textAlign="center" mt={6} display="flex" flexDirection="column" alignItems="center">
                <img src={'/images/empty-shopping-cart.svg'} alt="cart" width={300} />
                <Typography variant="h2">No Hits 🎯</Typography>
                <Typography variant="h6" mb={3}>
                  Ooops! The Product you are searching is no longer available.
                </Typography>
                <Button
                variant="contained"
                onClick={() => setSearchQuery("")}
                >
                Clear
                </Button>
                </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
    </Box>
  )
}

export default Shop;