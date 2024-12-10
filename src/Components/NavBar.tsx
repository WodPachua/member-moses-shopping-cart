import { NavLink } from 'react-router-dom';
import Logo from '../assets/logomymy.png';
import Cart from '../assets/cart.svg';

// const Cart = '../assets/cart.svg';

interface NavBarProps {
  toggleCart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleCart }) => {

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-16 py-2 flex justify-between items-center bg-[#FFF6DC] bg-opacity-40 shadow-md">
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='transform -translate-y-1 cursor-pointer' width='70px'/>
        <h1 className='text-2xl text-[#3D5B59] font-semibold ml-2 font-size[1.5rem]'>GoodNewsShop</h1>
      </div>
      <nav className='flex gap-8'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          Home
        </NavLink>
        <NavLink to='/shop' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          Catalogue
        </NavLink>
        <NavLink to='/faqs' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          FAQs
        </NavLink>
      </nav>
      <div className='flex gap-6 items-center'>
        <div className='relative' onClick={toggleCart}>
          <img src={Cart} alt="Cart" className='transform -translate-y-1 cursor-pointer'/>
          <div className='absolute top-[-7px] right-[-17px] w-6 h-6 rounded-full bg-[#3D5B59] flex justify-center items-center text-white font-bold'>
            {2}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;