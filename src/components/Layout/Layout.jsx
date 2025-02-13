
import Navbar from './../Navbar/Navbar';
import Footer from './../footer/footer';
import { Outlet } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';



export default function Layout() {
  return (
      <>
    
      <div className="d-flex flex-column min-vh-100 py-4">
              <Navbar />
              <div className='pt-5 d-flex flex-column light-bg flex-grow-1 justify-content-center align-items-center'>
                  <Outlet />
              </div>
              <Footer />
          </div>
     
          
      </>
  )
}

