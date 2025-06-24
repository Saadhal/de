import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './App.css';
import { SessionProvider } from './hooks/SessionContext';
function App() {
  return (
    <SessionProvider>
  <RouterProvider router={router} />
  </SessionProvider>
  );
}

export default App;
