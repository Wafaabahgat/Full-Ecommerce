import React from 'react';
import { teamMembers } from '@/data/aboutData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Team = () => {
    return (
        <section className="bg-gray-50 py-8 relative">
            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, el: '.custom-pagination' }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="px-4 relative"
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">
                            <div className="w-full h-full">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="xl:max-w-[370px] lg:max-w-[320px] sm:max-w-[240px] max-w-[200px] md:max-h-[430px] max-h-[300px] h-full object-cover mb-4 mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex justify-center mt-4"></div>
        </section>
    );
};

export default Team;

