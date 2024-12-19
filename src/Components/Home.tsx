import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import IMG1 from '/images/products/s1.jpg';
import Grid from '@mui/material/Grid';
import Trending from './Trending';
import { ProductType } from './Types';
import { Typography } from '@mui/material';

const Home = ({ productsData }: { productsData: ProductType[] }) => {
  const [currentProduct, setCurrentProduct] = useState(productsData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProduct = productsData[Math.floor(Math.random() * productsData.length)];
      setCurrentProduct(randomProduct);
    }, 5000);

    return () => clearInterval(interval);
  }, [productsData]);

  return (
    <main className="flex-1 p-12 pt-[8rem]">
      <div className='home max-w-7xl mx-auto mt-4 flex'>
        <div className='content flex-1 p-8'>
          <h2 className='title text-3xl leading-snug'>
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-1 after:w-full after:bg-orange-500">Amazing</span> and <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-1 after:w-full after:bg-orange-500">Life-Transforming</span> literature <br />
            the World needs.
          </h2>
          <h3 className='subtitle text-gray-600 font-normal leading-snug mt-8 mb-12'>
            As fresh cool water is to a thirsty traveller, so is good news to one who has been worn out by the struggles of life.
          </h3>
          <Link to='/browse'>
            <button className='btn px-8 py-4 bg-[#B99095] border border-[#B99095] rounded text-white text-lg shadow transition-transform transform hover:translate-x-[-2px] hover:translate-y-[-2px]'>
              Browse Products
            </button>
          </Link>
        </div>
        <div className='preview flex-1 text-center flex flex-col items-center justify-center align-center shadow-2xl m-8' style={{ width: '250px', height: '350px' }}>
          <Link to={`/product/${currentProduct.id}`} className='card flex flex-col justify-between items-center rounded-lg shadow-lg transition-transform transform hover:translate-x-[-2px] hover:translate-y-[-2px]' style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img src={currentProduct.photo} alt='' className='w-full h-full object-cover'/>
            <Typography variant='body2' className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2'>
              {currentProduct.title} 🔎 Click to View
            </Typography>
          </Link>
        </div>
        {/* <Typography variant='body2' className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2'>
        {currentProduct.description}
        </Typography> */}
      </div>
      <Grid item xs={12} sm={12} lg={12}>
        <Trending productsData={productsData} />
      </Grid>
    </main>
  );
}

export default Home;