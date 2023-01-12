import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Resume from '../Resume/Resume';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Works></Works>
        </div>
    );
};

export default Home;