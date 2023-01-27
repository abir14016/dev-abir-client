import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Works></Works>
            {/* <Blogs></Blogs> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;