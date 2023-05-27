import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Offers from './Offers';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Ads from './Ads';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Offers></Offers>
            <Testimonials></Testimonials>
            <Ads></Ads>
            <Contact></Contact>
        </div>
    );
};

export default Home;