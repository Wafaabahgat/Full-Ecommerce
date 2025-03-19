import Breadcrumbs from '@/components/ui/Breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mainContainer">
            <div className="flex mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: '404 Error', path: '/not-found' },
                    ]}
                />
            </div>
            <div className="flex flex-col items-center justify-center md:my-[80px] sm:my-[60px] my-[40px]">
                <p className="text-black lg:text-[80px] md:text-[70px] sm:text-[50px] text-[30px]">404 Not Found</p>
                <p className="text-black sm:text-[16px] text-[14px] lg:mt-[40px] md:mt-[30px] mt-[20px] lg:mb-[80px] md:mb-[60px] sm:mb-[40px] mb-[20px]">
                    Your visited page not found. You may go home page.
                </p>
                <Link to="/" className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded">
                    Back to home page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

