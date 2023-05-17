import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Products></Products>

            <Footer></Footer>
        </div>
    );
};

export default Home;