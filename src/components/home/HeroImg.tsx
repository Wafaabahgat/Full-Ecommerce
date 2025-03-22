import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import heroImage1 from '@/assets/images/hero.png';
import heroImage2 from '@/assets/images/heroo.png';

const heroData = [
    {
        img: heroImage1,
    },
    {
        img: heroImage2,
    },
    {
        img: heroImage1,
    },
];

const HeroImg = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, el: '.custom-pagin' }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="h-full"
            >
                {heroData?.map((e, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="relative w-full h-full">
                                <img
                                    src={e.img}
                                    alt={`Hero ${i + 1}`}
                                    className="w-full h-full bg-cover max-h-[450px] aspect"
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Pagination container */}
            <div className="custom-pagin absolute bottom-4 left-1/2 right-1/2 transform flex justify-center space-x-2 z-10"></div>
        </div>
    );
};

export default HeroImg;

