import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mobile from './components/Mobile/Mobile';
import Email from './components/Email/Email';
import Otp from './components/Otp/Otp';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/mobile',
    element: <Mobile/>
  },
  {
    path: '/email',
    element: <Email/>
  },
  {
    path: '/otp',
    element: <Otp/>
  }
])

function App() {
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
