import { lazy } from 'react';
import DefaultLayout from '@/Layouts/DefaultLayout';

const Home = lazy(() => import('@/pages/Home.page'));
const SignUpForm = lazy(() => import('@/pages/Auth/SignUpForm'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Profile = lazy(() => import('@/pages/Account/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound.page'));
const Cart = lazy(() => import('@/pages/Cart.page'));
const Wishlist = lazy(() => import('@/pages/Wishlist.page'));
const ContactUs = lazy(() => import('@/pages/ContactUs.page'));
const AboutUs = lazy(() => import('@/pages/AboutUs.page'));

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
            { path: '/my-cart', element: <Cart /> },
            { path: '/my-wishlist', element: <Wishlist /> },
            { path: '/about-us', element: <AboutUs /> },
        ],
    },
];
export { routes };

