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
        <div>
            <h2 className='text-4xl font-bold text-center'>Start Exploring</h2>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center mb-4">
                    <div
                        className={`p-2 mx-2 rounded-xl cursor-pointer ${activeTab === 1 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Tab 1
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
                <div className="w-full max-w-sm">
                    {activeTab === 1 &&
                        <div  className="flex flex-wrap justify-center">
                            {
                                products && products.map(product => {

                                    if (product?.category === 'Bag') {
                                        // console.log(product)
                                        return (
                                            <div className="card w-96 bg-base-100 shadow-xl">
                                                <figure className="px-10 pt-10">
                                                    <img src={product?.img} alt="Shoes" class="rounded-xl" />
                                                </figure>
                                                <div class="card-body items-center text-center">
                                                    <h2 class="card-title">{product?.name}</h2>
                                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                                    <div class="card-actions">
                                                        <button class="btn btn-primary">Buy Now</button>
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