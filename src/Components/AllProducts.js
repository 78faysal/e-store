import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    return (
        <div className='mt-20'>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                {
                    allProducts && allProducts.map(allProduct => {
                            // console.log(product)
                            return (
                                <div className="card w-72 mx-auto bg-base-100 shadow-xl">
                                    <figure className="px-5 pt-5">
                                        <img src={allProduct?.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center">
                                        <h2 className="card-title">{allProduct?.name}</h2>

                                        <p>Seller: {allProduct?.seller}</p>
                                        <p>Rating: {allProduct?.ratings}</p>
                                        <div className="flex items-center gap-16 mt-2">
                                            <span className='text-2xl font-bold'>${allProduct?.price}</span>
                                            {/* <button
                                                type='button'
                                                onClick={() => openModal(allProduct)}
                                                className="btn hover:border-yellow-300">Buy Now</button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    );
};

export default AllProducts;