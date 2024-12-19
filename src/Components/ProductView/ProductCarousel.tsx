import React, { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ProductType } from '../Types';

interface ProductCarouselProps {
  product: ProductType;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ product }) => {
  const [nav1, setNav1] = React.useState<Slider | null>(null);
  const [nav2, setNav2] = React.useState<Slider | null>(null);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const getProductImage = product ? product.photo : "/images/products/s1.jpg";

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: "centerThumb",
    speed: 500,
  };

  return (
    <Box>
      <Slider asNavFor={nav2 ?? undefined} ref={slider => (slider1.current = slider)}>
        <Box>
          <img
            src={getProductImage}
            alt={getProductImage}
            width={500}
            height={500}
            style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
          />
        </Box>
        {product.images.map((step) => (
          <Box key={step.id}>
            <img
              src={step.imgPath}
              width={500}
              height={500}
              alt={step.imgPath}
              style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
            />
          </Box>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1 ?? undefined}
        ref={slider => (slider2.current = slider)}
        {...settings}
      >
        <Box sx={{ p: 1, cursor: "pointer" }}>
          <img
            src={getProductImage}
            alt={getProductImage}
            width={72}
            height={72}
            style={{ borderRadius: '5px' }}
          />
        </Box>
        {product.images.map((step) => (
          <Box key={step.id} sx={{ p: 1, cursor: "pointer" }}>
            <img
              src={step.imgPath}
              alt={step.imgPath}
              width={72}
              height={72}
              style={{ borderRadius: '5px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;