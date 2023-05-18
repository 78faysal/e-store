import React from 'react';
import offerImg from '../Photos/promo2.webp';

const Offers = () => {
    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 items-center container gap-5 mx-auto bg-yellow-50 rounded-2xl'>
            <img src={offerImg} alt="" />
            <div>
                <h2 className='text-5xl font-bold'>Special offer
                    in kids products</h2>
                <p className='text-lg mt-5 mb-8'>Fashion is a form of self-expression and autonomy at a particular period and place.
                </p>

                <button className="btn hover:border-yellow-300">Discover More</button>
            </div>
        </div>
    );
};

export default Offers;