import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
        </div>
    );
};

export default Home;