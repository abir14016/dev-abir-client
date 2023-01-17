import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className='bg-base-100 rounded-2xl mx-2 md:mx-8 lg:mx-28 px-4 md:px-8 lg:px-20 py-4 md:py-8 lg:py-16 my-4 md:my-8 lg:my-16 xl:my-20'>
            <div className='flex justify-start items-center mb-5 md:mb-8 lg:mb-10 xl:mb-12'>
                <h2 className="text-4xl font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='mr-3 text-primary' icon="fa-solid fa-address-book" /></span>Contact</h2>
                <hr className="hidden md:block lg:block xl:block my-4 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded border-0" />
            </div>
            <hr className="block md:hidden lg:hidden xl:hidden my-4 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded border-0 md:my-10" />
        </div>
    );
};

export default Contact;