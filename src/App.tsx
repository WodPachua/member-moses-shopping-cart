import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

function App() {
  return (
    <>
    <NavBar toggleCart={()=>{}}/>
      <div className='main-content bg-[#FFF6DC]'>
        <Outlet />
      </div>
      <Cart />
    <Footer />
    </>
  )
}
export default App