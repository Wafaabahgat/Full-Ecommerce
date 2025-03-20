import React from 'react';
import { IconMoneybag, IconSale, IconShoppingbag } from '../icons/MainIcons';
import { BsShop } from 'react-icons/bs';
import { dataStats } from '@/data/aboutData';

const Stats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white gap-6 lg:grid-cols-4 lg:my-[140px] md:my-[110px] sm:my-[80px] my-[60px]">
            {dataStats.map((stat, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center p-6 rounded-lg shadow-md ${
                        index === 1 ? 'bg-red-500 text-white' : 'bg-gray-100'
                    }`}
                >
                    <div className='bg-slate-400 rounded-full p-1'>
                        <IconSale />
                    </div>
                    <h2 className="text-3xl font-bold">{stat.value}</h2>
                    <p className="text-center mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;

