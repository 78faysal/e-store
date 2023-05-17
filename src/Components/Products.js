import React, { useEffect, useState } from 'react';

const Products = () => {

    const [products, setProduct] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const [bags, setBags] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold text-center mb-3'>Start Exploring</h2>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center mb-4">
                    <div
                        className={`p-2 mx-2 text-lg font-semibold rounded-xl cursor-pointer ${activeTab === 1 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Bags
                    </div>
                    <div
                        className={`p-2 mx-2 rounded-xl cursor-pointer ${activeTab === 2 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Tab 2
                    </div>
                    <div
                        className={`p-2 mx-2 rounded-xl cursor-pointer ${activeTab === 3 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Tab 3
                    </div>
                </div>
                <div className="w-full container">
                    {activeTab === 1 &&
                        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                            {
                                products && products.map(product => {
                                    console.log(product)
                                    if (product?.category === 'Bag') {
                                        // console.log(product)
                                        return (
                                            <div className="card w-72 mx-auto bg-base-100 shadow-xl">
                                                <figure className="px-5 pt-5">
                                                    <img src={product?.img} alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center">
                                                    <h2 className="card-title">{product?.name}</h2>

                                                    <p>Seller: {product?.seller}</p>
                                                    <p>Rating: {product?.ratings}</p>
                                                    <div className="flex items-center gap-16 mt-2">
                                                        <span className='text-2xl font-bold'>${product?.price}</span>
                                                        <button className="btn hover:border-yellow-300">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>}
                    {activeTab === 2 && <p>Content of Tab 2</p>}
                    {activeTab === 3 && <p>Content of Tab 3</p>}
                </div>
            </div>
        </div>
    );
};

export default Products;