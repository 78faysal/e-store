import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
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
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
