import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mobile from './components/Mobile/Mobile';
import Email from './components/Email/Email';
import Otp from './components/Otp/Otp';
import LandingProfile from './components/LandingProfile/LandingProfile';
import Gender from './components/Gender/Gender';
import Interest from './components/Interest/Interest';
import Cards from './components/Cards/Cards';
import Chat from './components/Chat/Chat';

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
  },
  {
    path: '/landingProfile',
    element: <LandingProfile/>
  },
  {
    path: '/gender',
    element: <Gender/>
  },
  {
    path: '/interest',
    element: <Interest/>
  },
  {
    path: '/cards',
    element: <Cards/>
  },
  {
    path: '/chat',
    element: <Chat/>
  },


])

function App() {
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
