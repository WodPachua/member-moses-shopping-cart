import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar toggleCart={()=>{}}/>
      <div className='main-content bg-[#FFF6DC]'>
        <Outlet />
      </div>
    <Footer />
    </>
  )
}
export default App