import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './Products';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])




    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    const { cartItems, setCartItems } = useContext(CartContext);

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
        const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        selectedItems.push(data);
        setCartItems(localStorage.setItem('selectedItems', JSON.stringify(selectedItems)));
        console.log(data);

        // const storedSelectedItems = JSON.parse(localStorage.getItem('selectedItems'));
        console.log(cartItems);
    };


    return (
        <div className='mt-20'>
            <h2 className='text-3xl font-bold text-center pt-5'>Get All Products</h2>
            <div className="form-control p-5 flex flex-row justify-center gap-5">
                <input type="text" placeholder="Search" className=" w-96 input input-bordered" />
                <button className="btn btn-active w-54">Search</button>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                {
                    allProducts && allProducts.map(allProduct => {
                        // console.log(product)
                        return (
                            <div key={allProduct.id} className="card w-72 mx-auto bg-base-100 shadow-xl">
                                <figure className="px-5 pt-5">
                                    <img src={allProduct?.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center">
                                    <h2 className="card-title">{allProduct?.name}</h2>

                                    <p>Seller: {allProduct?.seller}</p>
                                    <p>Rating: {allProduct?.ratings}</p>
                                    <div className="flex items-center gap-16 mt-2">
                                        <span className='text-2xl font-bold'>${allProduct?.price}</span>
                                        <button
                                            type='button'
                                            onClick={() => openModal(allProduct)}
                                            className="btn hover:border-yellow-300">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

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
    );
};

export default AllProducts;