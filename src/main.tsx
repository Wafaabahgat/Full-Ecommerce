import ReactDOM from 'react-dom/client';
import { store } from '@/store/store';
import { RouterProvider } from 'react-router-dom';
// Tailwind css
import './tailwind.css';

// Router
import router from './router';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
    </Provider>,
);

