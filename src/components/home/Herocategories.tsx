import React, { useState } from 'react';
// import { categories } from '@/data/glabalData';
import { Link } from 'react-router-dom';
import { fetchCategories } from '@/slices/categories/categoryAction';
import useGet from '@/hooks/useGet';

const Herocategories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: categories, loading } = useGet({
        states: 'categories',
        allData: fetchCategories,
        limit: 1,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    // console.log('object', categories);
    return (
        <div className="">
            <div className="hidden lg:flex lg:flex-col gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white text-start">
                        <Link
                            to="#"
                            className="font-semibold hover:text-txt-red text-black xl:text-[18px] lg:text-[16px] text-[14px]"
                        >
                            {category.name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="lg:hidden flex ">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-txt-red text-white sm:px-4 px-2 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors mt-4 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
                >
                    All Categories
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Categories</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-black hover:text-txt-red text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {categories.map((category, index) => (
                                <div key={index} className="bg-white text-start">
                                    <Link
                                        to="#"
                                        className="font-semibold hover:text-txt-red text-black xl:text-[18px] lg:text-[16px] text-[14px]"
                                    >
                                        {category.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Herocategories;

