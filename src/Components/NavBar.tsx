import { Link, NavLink } from 'react-router-dom';
import Logo from '/images/logomymy.png';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

interface NavBarProps {
  toggleCart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleCart }) => {

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-16 py-2 flex justify-between items-center bg-[#FFF6DC] shadow-md">
      <Link to='/'>
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='transform -translate-y-1 cursor-pointer' width='70px'/>
        <h1 className='text-2xl text-[#3D5B59] font-semibold ml-2 font-size[1.5rem]'>GoodNewsShop</h1>
      </div>
      </Link>
      <nav className='flex gap-8'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          Home
        </NavLink>
        <NavLink to='/browse' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          Catalogue
        </NavLink>
        <NavLink to='/checkout' className={({ isActive }) => (isActive ? 'text-lg text-[#3D5B59] font-semibold relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-full after:left-0 after:bottom-0' : 'text-lg text-gray-700 relative after:content-[""] after:absolute after:bg-orange-500 after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full transition-all duration-300')} >
          Check-Out
        </NavLink>
      </nav>
      <Link to='/checkout' className='transform -translate-y-1 cursor-pointer'>
      <Badge badgeContent={4} color="secondary" onClick={toggleCart}>
        <ShoppingCart color="action" sx={{ color: '#B99095', '&:hover': { color: '#a3777c' }, fontSize: 30 }} className='transform -translate-y-1 cursor-pointer'/>
      </Badge>
      </Link>
    </header>
  );
};

export default NavBar;