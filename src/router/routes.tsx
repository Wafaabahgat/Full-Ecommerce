import { lazy } from 'react';
import DefaultLayout from '@/Layouts/DefaultLayout';
import ContactUs from '@/pages/ContactUs.page';
const Home = lazy(() => import('@/pages/Home.page'));

const SignUpForm = lazy(() => import('@/pages/Auth/SignUpForm'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Profile = lazy(() => import('@/pages/Account/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound.page'));

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/register', element: <SignUpForm /> },
            { path: '/login', element: <Login /> },
            { path: '/my-account', element: <Profile /> },
            { path: '/contact-us', element: <ContactUs /> },
            { path: '/not-found', element: <NotFound /> },
        ],
    },
];
export { routes };

