import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Tailwind css
import './tailwind.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense>
        <RouterProvider router={router} />
    </Suspense>,
);
