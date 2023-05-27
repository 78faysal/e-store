import React from 'react';
import adsImg from '../Photos/offer.webp';

const Ads = () => {
    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 items-center container gap-5 mx-auto bg-yellow-100 rounded-2xl p-10'>
            <div className='px-10'>
                <h2 className='text-5xl max-sm:text-4xl font-bold'>Earn money by sharing our products</h2>
                <p className='text-lg max-sm:text-md mt-5 mb-8'>Fashion is a form of self-expression and autonomy at a particular period and place.
                </p>

                <button className="btn hover:border-yellow-300">Discover More</button>
            </div>
            <img className='max-sm:p-5' src={adsImg} alt="" />
        </div>
    );
};

export default Ads;