import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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


    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold text-center mb-3'>Start Exploring</h2>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center mb-4">
                    <div
                        className={`p-2 mx-2 text-lg font-semibold rounded-full px-4 py-1 cursor-pointer ${activeTab === 1 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Bags
                    </div>
                    <div
                        className={`p-2 mx-2  rounded-full font-semibold px-4  cursor-pointer ${activeTab === 2 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Earphones
                    </div>
                    <div
                        className={`p-2 mx-2 rounded-full font-semibold px-4 cursor-pointer ${activeTab === 3 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Cap
                    </div>
                    <div
                        className={`p-2 mx-2 rounded-full font-semibold px-4 cursor-pointer ${activeTab === 4 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(4)}
                    >
                        Bottle
                    </div>
                    <div
                        className={`p-2 mx-2 rounded-full font-semibold px-4 max-sm:mt-2 cursor-pointer ${activeTab === 5 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(5)}
                    >
                        All
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

                    {activeTab === 2 &&
                        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                            {
                                products && products.map(product => {
                                    console.log(product)
                                    if (product?.category === 'Earphones') {
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
                        </div>
                    }



                    {activeTab === 3 &&
                        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                            {
                                products && products.map(product => {
                                    console.log(product)
                                    if (product?.category === 'Cap') {
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
                        </div>
                    }
                    {activeTab === 4 &&
                        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                            {
                                products && products.map(product => {
                                    console.log(product)
                                    if (product?.category === 'Bottle') {
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
                                                        <button
                                                            type='button'
                                                            onClick={openModal}
                                                            className="btn hover:border-yellow-300">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })

                            }


                            {showModal && (
                                <div className="fixed z-10 inset-0 overflow-y-auto">
                                    <div className="flex items-center justify-center min-h-screen p-4">
                                        <div className="bg-gray-500 text-white rounded-lg p-6 backdrop-filter backdrop-blur-4xl">
                                            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
                                            <p className="mb-4">
                                                This is the modal content. You can add any additional content or components here.
                                            </p>
                                            <button
                                                type="button"
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    {/* {activeTab === 4 && <Link to='/allProducts'></Link>} */}
                </div>

            </div>
        </div>
    );
};

export default Products;