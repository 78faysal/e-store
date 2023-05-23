import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import { CartContext } from './Components/Products';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <AllProducts />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <NotFound />
        },
      ]
    }
  ])
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Home></Home>
    </CartContext.Provider>
  );
}

export default App;
