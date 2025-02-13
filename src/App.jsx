
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import Navbar from './components/Navbar/Navbar';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';


let x = createHashRouter([
  {path:"" , element:<Layout/> ,children:[
    {index:"true" , element:<Home/>},
    {path:'about' ,element:<About/>},
    {path:'portfolio' ,element:<Portfolio/>},
    {path:'contact' ,element:<Contact/>},
    {path:'*' ,element:<ErrorNotFound/>},
  ]}
])
function App() {


  return (
    <>
    
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
