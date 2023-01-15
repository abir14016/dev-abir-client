import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Resume from '../Resume/Resume';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Works></Works>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;