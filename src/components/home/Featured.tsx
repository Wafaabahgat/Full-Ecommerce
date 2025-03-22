import React from 'react';
import img1 from '@/assets/images/homeImg (1).png';
import img2 from '@/assets/images/homeimg.png';
import img3 from '@/assets/images/homeImg (2).png';
import img4 from '@/assets/images/homeImg (4).png';

const Featured = () => {
    return (
        <div className="lg:my-[140px] md:my-[110px] sm:my-[80px] my-[60px]">
            {/* Featured Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">
                    <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                    Featured
                </h2>
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-5 gap-2">
                <p className="text-black font-bold md:text-[28px] lg:text-[32px] text-[22px]">New Arrival</p>
            </div>

            {/*  Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 gap-4 mt-10">
                <div className="w-full">
                    <img src={img1} alt="" className="lg:max-h-[577px] md:max-h-[540px] max-h-[460px] w-full h-full element bg-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-full">
                        <img src={img2} alt="" className="max-h-[284px] w-full h-full" />
                    </div>
                    <div className="flex xl:gap-8 gap-4 w-full">
                        <div className='w-full'>
                            <img src={img3} alt="" className="max-h-[284px] w-full h-full bg-cover" />
                        </div>
                        <div className='w-full'>
                            <img src={img4} alt="" className="max-h-[284px] w-full h-full bg-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;

