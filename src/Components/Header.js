import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../Photos/slider (1).jpg';
import img2 from '../Photos/slider (2).jpg';
import img3 from '../Photos/slider (3).jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header = () => {
    return (
        <div>
            <>
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img style={{height: "700px"}} className='w-full object-cover brightness-75' src={img1} alt="" />
                            <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                                <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                                <button className='btn rounded-full border-yellow-300'>Explore Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='relative'>
                        <img style={{height: "700px"}} className='h-2/5 w-full object-cover brightness-75' src={img2} alt="" />
                        <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                            <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                            <button className='btn rounded-full border-yellow-300'>Explore Now</button>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='relative'>
                            <img style={{height: "700px"}} className='h-2/5 w-full object-cover brightness-75' src={img3} alt="" />
                            <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                                <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                                <button className='btn rounded-full border-yellow-300'>Explore Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Header;