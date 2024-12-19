import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import BlankCard from "./BlankCard";
import { ProductType } from "./Types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({ productsData }: { productsData: ProductType[] }) => {

  const filterTrending = (products: ProductType[]) => {
    if (products) return products.filter((t) => t.rating >= 3);

    return products;
  };

  const Trendingproducts = (() =>
    filterTrending(productsData)
  );

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} mt={5} color="#3D5B59" >
        <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-1 after:w-full after:bg-orange-500" >Trending Products</span>
      </Typography>
      <Slider {...settings}>
        {Trendingproducts().map((product) => (
          <Box key={product.title} sx={{ p: 1, minWidth: '20%' }}>
            <BlankCard sx={{ p: 0 }} className="hoverCard">
              <Typography
                component={Link}
                to={`/product/${product.id}`}
              >
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={135}
                  ></Skeleton>
                ) : (
                  <img src={product.photo} alt="img" width={125} height={134} style={{ width: "100%" }} />
                )}
              </Typography>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography fontWeight={600} noWrap>{product.title}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h5">${product.price}</Typography>
                    <Typography
                      color={"GrayText"}
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-20px" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-20px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default Trending;