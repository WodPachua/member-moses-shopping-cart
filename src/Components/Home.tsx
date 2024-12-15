import { Link } from 'react-router-dom'
import IMG1 from '/images/products/s1.jpg'

const Home = () => {
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
          <Link to={`/product/${1}`} className='card flex flex-col justify-between items-center rounded-lg shadow-lg transition-transform transform hover:translate-x-[-2px] hover:translate-y-[-2px]' style={{ width: '100%', height: '100%' }}>
            <img src={IMG1} alt='' className='w-full h-full object-cover'/>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home