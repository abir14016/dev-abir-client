import React, { useEffect, useState } from 'react';
import abir2 from '../../../assests/images/abir/abir-2.png';
import './About.css';
import Service from '../Service/Service';

const About = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className='bg-base-100 rounded-2xl mx-2 md:mx-8 lg:mx-28 px-4 md:px-8 lg:px-20 py-4 md:py-8 lg:py-16 my-4 md:my-8 lg:my-16 xl:my-20'>
            <div className='flex justify-start items-center mb-0 md:mb-5 lg:mb-10 xl:mb-12'>
                <h2 className="text-4xl font-Poppins font-bold mr-5">About Me</h2>
                <hr class="hidden md:block lg:block xl:block my-4 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded border-0" />
            </div>
            <hr class="block md:hidden lg:hidden xl:hidden my-4 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded border-0 md:my-10" />
            <div className='block md:flex lg:flex xl:flex justify-center'>
                <div className='mr-0 md:mr-5 lg:mr-10 xl:mr-12 mb-4 md:mb-0'>
                    <img className='bg-gradient-to-r from-[#7edbe2] to-[#007071] rounded-2xl' src={abir2} alt="abir-pic-2" />
                </div>
                <div className='font-Raleway font-semibold'>
                    <p className='text-start text-gray-500 mb-3'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p className='text-start text-gray-500'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                </div>
            </div>
            <div className='mt-5 md:mt-8 lg:mt-12 xl:mt-16'>
                <h2 className="text-3xl text-left font-Poppins font-bold mr-5">What I do!</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;