import React from 'react';
import contactImg from '../Photos/contact.jpg';

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto py-8">
                <h2 className="text-4xl text-center font-bold mb-4">Contact Us</h2>
                <div className='grid max-sm:grid-cols-1 grid-cols-2 items-center'>
                    <form className="w-96 mx-auto max-sm:p-5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-400 p-2 rounded"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-400 p-2 rounded"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full border border-gray-400 p-2 rounded"
                                rows="4"
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button 
                            type='submit'
                            className='btn rounded-xl hover:border-yellow-300'>Send</button>
                        </div>
                    </form>
                    <img src={contactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;