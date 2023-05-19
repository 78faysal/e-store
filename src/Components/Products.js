import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

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
        setShowModal(false);
    };


    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openModal = (product) => {
        setIsLoading(true);

        // Simulate data fetching delay
        setTimeout(() => {
            setModalData(product);
            setIsLoading(false);
            setShowModal(true);
        }, 100);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'; // Disable scrolling of the background content
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling of the background content
        }
    }, [showModal]);

    const handleAddToCart = (data) => {
        // Add the selected product to the cart
        setCartItems((prevCartItems) => [...prevCartItems, data]);
        <Navbar 
        key={data.key}
        cartData={cartItems}></Navbar>
    }



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
                                                        <button
                                                            type='button'
                                                            onClick={() => openModal(product)}
                                                            className="btn hover:border-yellow-300">Buy Now</button>
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
                                    // console.log(product)
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
                                                        <button
                                                            type='button'
                                                            onClick={() => openModal(product)}
                                                            className="btn hover:border-yellow-300">Buy Now</button>
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
                                    // console.log(product)
                                    if (product?.category === 'Cap') {
                                        // console.log(product)
                                        return (
                                            <div className="card w-72 mx-auto bg-base-100 shadow-xl" key={product.id}>
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
                                                            onClick={() => openModal(product)}
                                                            className="btn hover:border-yellow-300">Buy Now</button>
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
                                    // console.log(product)
                                    if (product?.category === 'Bottle') {
                                        // console.log(product)
                                        return (
                                            <div className="card w-72 mx-auto bg-base-100 shadow-xl" key={product.id}>
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
                                                            onClick={() => openModal(product)}
                                                            className="btn hover:border-yellow-300">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })

                            }

                        </div>
                    }

                    {/* {activeTab === 4 && <Link to='/allProducts'></Link>} */}


                    {showModal && (
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen p-4">
                                <div className="bg-gray-700 text-white rounded-lg p-6 backdrop-filter backdrop-blur-xl flex flex-wrap gap-8 items-center">
                                    <img className='w-80' src={modalData.img} alt="" />
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">{modalData.name}</h2>
                                        <div class="rating rating-xs items-center gap-2">
                                            Rating: {modalData.ratings}
                                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>Reviews: {modalData.ratingsCount}</p>
                                        <p>Seller: {modalData.seller}</p>
                                        <p>Available: {modalData.stock}</p>
                                        <p className='text-2xl'>{modalData.price}$</p>
                                        <div className='mt-4'>
                                            <button
                                                type="button"
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 me-3 font-semibold py-2 px-4 rounded"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                            <button
                                                onClick={() => handleAddToCart(modalData)}
                                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded'>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Products;