import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Testimonials = () => {
    return (
        <div className="bg-gray-50 p-10 py-16">
            <h2 className="text-4xl text-center font-bold">Good news from far away 🥇</h2>
            <p className="text-xl text-center text-gray-500 p-2 pb-4">Let's see what people think of E-Store</p>
            <Swiper
                // slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Customize the number of slides per view based on screen size
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl  container mx-auto">
                    <SwiperSlide>
                        <div className="bg-white p-4 shadow-lg hover:shadow-xl rounded-xl text-center m-7">
                            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                            <h4 className="text-gray-600 text-sm mb-4">France</h4>
                            <p className="text-gray-800">One of the standout features is the seamless navigation. The well-organized categories and search functionality make it effortless to find the items I'm looking for. The filters and sorting options further enhance the browsing experience.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-4 shadow-lg hover:shadow-xl rounded-xl text-center m-7">
                            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                            <h4 className="text-gray-600 text-sm mb-4">Europe</h4>
                            <p className="text-gray-800">The product descriptions are detailed and accurate, providing all the necessary information I need to make informed purchase decisions. I appreciate the high-quality product images from different angles, which give me a clear view of what I'm buying.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-4 shadow-lg hover:shadow-xl rounded-xl text-center m-7">
                            <h3 className="text-xl font-semibold mb-2">Emtiaj Pabel</h3>
                            <h4 className="text-gray-600 text-sm mb-4">Pabna, Bangladesh</h4>
                            <p className="text-gray-800">The checkout process is smooth and secure. I never had any issues with payments, and the site offers various payment options to choose from, including credit cards, digital wallets, and bank transfers. The order tracking feature is also reliable.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-4 shadow-lg hover:shadow-xl rounded-xl text-center m-7">
                            <h3 className="text-xl font-semibold mb-2">Jorina Madam</h3>
                            <h4 className="text-gray-600 text-sm mb-4">Rongpur, Bangladesh</h4>
                            <p className="text-gray-800">Moreover, the customer support team is responsive and helpful. I had a few inquiries and they promptly addressed my concerns, ensuring a positive shopping experience. The return and refund process is hassle-free as well, showing the site's commitment to customer satisfaction.</p>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;