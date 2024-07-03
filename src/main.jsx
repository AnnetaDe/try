import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Providers from './providers/providers';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './store/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={1500} theme="dark" />
      </BrowserRouter>
    </AuthProvider>
  </Providers>
);
