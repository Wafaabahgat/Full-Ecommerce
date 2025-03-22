import { useState } from 'react';
import { categories } from '@/data/glabalData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconArrowLeft, IconArrowRight } from '../icons/MainIcons';

const CategoryCard = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="">
            {/* Categories */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">
                    <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                    Categories
                </h2>
            </div>

            <div className="">
                <div className="flex md:flex-row flex-col justify-between mt-5 gap-2 relative">
                    <p className="text-black font-bold md:text-[28px] lg:text-[32px] text-[22px]">Browse By Category</p>
                    {/* Custom Navigation Buttons */}
                    <div className="custom-navigation flex gap-2 absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                        <div className="custom-prev cursor-pointer">
                            <span className="text-gray-600 hover:text-red-500">
                                <IconArrowLeft className="md:w-8 sm:w-6 w-5 h-5 md:h-8 sm:h-6" />
                            </span>
                        </div>
                        <div className="custom-next cursor-pointer">
                            <span className="text-gray-600 hover:text-red-500">
                                <IconArrowRight className="md:w-8 sm:w-6 w-5 h-5 md:h-8 sm:h-6" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Swiper */}
                <div className="mt-8">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            850: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`bg-white py-12 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer border border-black/30 ${
                                        selectedCategory === index ? 'border-2 border-red-500' : ''
                                    }`}
                                    onClick={() => setSelectedCategory(index)}
                                >
                                    <span className="text-3xl">{category.icon}</span>
                                    <h3 className="lg:text-[18px] md:text-[16px] text-[14px] font-semibold lg:mt-5 md:mt-4 mt-3">
                                        {category.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;

