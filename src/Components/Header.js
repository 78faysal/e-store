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

    const brands = [
        {
            id: 1,
            name: 'Apple',
            image: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png',
        },
        {
            id: 2,
            name: 'Samsung',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoxsX3bw93gVfimwJZkunsRbDWxraySQjbJV89johRJRw8qL1&s',
        },
        {
            id: 3,
            name: 'Adidas',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweocjhoj41IjjcEWXFZKK33SGuePNYpN5ksznQ32RoGcTxEc&s',
        },
        {
            id: 2,
            name: 'Gucci',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvtCsJ60bkvm1zRV4_pU-GNVRrsy8YIKkLYnFekzR7QK6A2Q&s',
        } 
        // Add more brands here
    ];

    return (
        <div className='mt-20'>
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
                            <img style={{ height: "600px" }} className='w-full object-cover brightness-75' src={img1} alt="" />
                            <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                                <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                                <button className='btn rounded-full hover:border-yellow-300'>Explore Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='relative'>
                        <img style={{ height: "600px" }} className='h-2/5 w-full object-cover brightness-75' src={img2} alt="" />
                        <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                            <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                            <button className='btn rounded-full hover:border-yellow-300'>Explore Now</button>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img style={{ height: "600px" }} className='h-2/5 w-full object-cover brightness-75' src={img3} alt="" />
                            <div className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <p className='text-xl font-semibold'>In this season, find the best 🔥</p>
                                <h2 className='text-6xl font-bold mb-4'>Exclusive collection for everyone</h2>

                                <button className='btn rounded-full hover:border-yellow-300'>Explore Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4">Our Brands</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {brands.map(brand => (
                        <div key={brand.id} className="bg-white p-4 shadow-md rounded">
                            <img src={brand.image} alt={brand.name} className="h-24 mx-auto" />
                            <h3 className="text-lg font-semibold mt-2">{brand.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;