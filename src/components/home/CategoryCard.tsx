import { useState } from 'react';
import { categories } from '@/data/glabalData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CategoryCard = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* العنوان */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">
                    <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                    Categories
                </h2>
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-5 gap-2">
                <p className="text-black font-bold md:text-[28px] lg:text-[32px] text-[22px]">Browse By Category</p>
            </div>

            {/* Swiper */}
            <div className="mt-8">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
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
                                <span className="text-3xl ">{category.icon}</span>
                                <h3 className="text-lg font-semibold lg:mt-5 md:mt-4 mt-3">{category.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            
        </div>
    );
};

export default CategoryCard;

