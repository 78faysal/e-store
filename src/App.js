import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

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
          path: '/items',
          element: <Home />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/',
          element: <Home />
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
