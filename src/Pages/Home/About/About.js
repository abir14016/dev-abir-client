import React, { useEffect, useState } from 'react';
import abir2 from '../../../assests/images/abir/abir-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <h2 className="text-4xl font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='mr-3 text-primary' icon="fa-solid fa-address-card" /></span>About Me</h2>
                <hr class="hidden md:block lg:block xl:block my-4 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded border-0" />
            </div>
            <hr class="block md:hidden lg:hidden xl:hidden my-4 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded border-0 md:my-10" />
            <div className='block md:grid lg:grid xl:grid grid-cols-3'>
                <div className='mr-0 md:mr-5 lg:mr-10 xl:mr-12 mb-4 md:mb-0'>
                    <img className='bg-gradient-to-r from-[#7edbe2] to-[#007071] rounded-2xl about-image lg:hover:scale-110 transform duration-1000' src={abir2} alt="abir-pic-2" />
                </div>
                <div className='col-span-2'>
                    <div className='font-Raleway font-semibold'>
                        <p className='text-start text-gray-500 mb-3'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p className='text-start text-gray-500 block md:hidden lg:block'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    </div>
                    <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow-lg bg-accent mt-4 md:mt-8 lg-16 block md:flex lg:flex justify-start">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <h3 className='text-3xl'>📌</h3>
                            </div>
                            <div className="stat-title">Contributions</div>
                            <div className="stat-value text-primary">480+</div>
                            <div className="stat-desc">Jan 1st - Nov 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">Repositories</div>
                            <div className="stat-value text-secondary">50+</div>
                            <div className="stat-desc">↗︎ 21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure">
                                <h3 className='text-3xl'>🧰</h3>
                            </div>
                            <div className="stat-title">Projects</div>
                            <div className="stat-value text-[#580ef8]">15+</div>
                            <div className="stat-desc">↘︎ 5+ running</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-5 md:mt-8 lg:mt-12 xl:mt-16'>
                <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-hand" /></span>What I do!</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 xl:gap-10 mt-2 md:mt-8 lg:mt-12 xl:mt-12'>
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