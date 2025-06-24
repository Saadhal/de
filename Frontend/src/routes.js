import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Patient from './pages/Patient';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/booking',
    element: <Layout><Booking /></Layout>,
  },
  {
    path: '/calendar',
    element: <Layout><Calendar /></Layout>,
  },
  {
    path: '/patient',
    element: <Layout><Patient /></Layout>,
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '/admin',
    element: <Layout><AdminDashboard /></Layout>,
  },
]);

export default router;
