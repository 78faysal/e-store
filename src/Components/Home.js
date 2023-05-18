import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Offers from './Offers';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Products></Products>
            <Offers></Offers>
            <Testimonials></Testimonials>

            <Footer></Footer>
        </div>
    );
};

export default Home;