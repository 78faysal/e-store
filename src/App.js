import { Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import { CartContext } from './Components/Products';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  const [cartItems, setCartItems] = useState([]);

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     // element: <Home />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       },
  //       {
  //         path: '/products',
  //         element: <AllProducts />
  //       },
  //       {
  //         path: '/contact',
  //         element: <Contact />
  //       },
  //       {
  //         path: '*',
  //         element: <NotFound />
  //       },
  //     ]
  //   }
  // ])
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
