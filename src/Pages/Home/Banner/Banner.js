import React from 'react';
import Typewriter from 'typewriter-effect';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import abir1 from '../../../assests/images/abir/abir-1.png';
import './Banner.css';

const Banner = () => {
    library.add(fas, faTwitter, faFontAwesome, faFacebook, faGithub, faLinkedin, faInstagram);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-2 md:px-8 lg:px-28 mt-0 md:mt-28 lg:mt-36 xl:mt-36'>
            <div className='text-left md:text-left lg:text-left xl:text-left hidden md:block'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-secondary font-black mb-1 md:mb-2 lg:mb-3 xl:mb-3'>Hello,</p>
                <p className='text-3xl md:text-3xl lg:text-6xl xl:text-6xl font-medium'>I'm <span className='text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-extrabold'>Abir Hasan</span></p>
                <div className='flex justify-start text-3xl md:text-3xl lg:text-5xl mt-2 md:mt-3 lg:mt-5 xl:mt-5'>
                    <p className='mr-3 font-medium'>A</p>
                    <div className='text-secondary font-bold'>
                        <Typewriter
                            options={{
                                strings: [
                                    'Front End Developer',
                                    'Backend Developer',
                                    'Javascript Developer',
                                    'React Developer',
                                    'Full-Stack Developer',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <p className='font-Raleway mt-4 font-bold'>Welcome! Are you looking for a Full STACK <span className='text-secondary'>(MERN)</span> Web Developer for your company. Here I'm a full stack web developer with a skill set of JavaScript, React, Node, Express, MongoDB etc. Let's talk together.</p>
                <div className='flex justify-start mt-5'>
                    <a className='flex justify center items-center bg-gradient-to-r from-secondary to-primary rounded-3xl px-5 py-2 text-md font-lightbold text-white download-resume-button transition duration-300' target="_blank" href="https://drive.google.com/file/d/1F-2OCc8JKksiVVgpICDA71o4Botk1WkY/view?usp=sharing" rel='noreferrer'>
                        <p className='mr-2'>View Resume</p>
                        <FontAwesomeIcon className='mt-1' icon="fa-solid fa-arrow-right" />
                    </a>
                </div>
            </div>
            <div className='flex justify-center md:hidden lg:hidden xl:hidden'>
                <img className='w-full bg-gradient-to-r from-primary to-secondary banner-image px-3 pt-3 rounded-2xl drop-shadow-xl transition duration-300' src={abir1} alt="abir-1-pic" />
            </div>
            <div className='bg-base-100 rounded-2xl pb-4 md:pb-8 lg:pb-10 xl:pb-12'>
                <div className='hidden md:flex lg:flex xl:flex justify-center md:mt-[-60px] lg:mt-[100px] xl:mt-[-100px]'>
                    <img className='w-2/6 bg-gradient-to-r from-primary to-secondary banner-image px-3 pt-3 rounded-2xl drop-shadow-xl transition duration-300' src={abir1} alt="abir-1-pic" />
                </div>
                <div className='font-Poppins'>
                    <div>
                        <h2 className='text-2xl font-extrabold mb-3 mt-6'>Abir Hasan</h2>
                        <div className='bg-accent py-1 px-4 rounded-md inline'>
                            <h4 className='inline text-gray-500'>Web Developer</h4>
                        </div>
                    </div>
                    <div className='flex justify-evenly px-24 md:px-28 lg:px-48 mt-4'>
                        <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/abir14016' className='bg-accent px-2 py-1 rounded-md hover:bg-gradient-to-r from-primary to-secondary text-[#00acee] hover:text-white shadow-xl transition duration-300'>
                            <p className=' text-sm md:text-md lg:text-md xl:text-lg'><FontAwesomeIcon icon="fa-brands fa-twitter" /></p>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://www.facebook.com/mdabir.hassan.543/' className='bg-accent px-2 py-1 rounded-md hover:bg-gradient-to-r from-primary to-secondary text-[#3b5998] hover:text-white shadow-xl transition duration-300'>
                            <p className=' text-sm md:text-md lg:text-md xl:text-lg'><FontAwesomeIcon icon="fa-brands fa-facebook" /></p>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/abir14016/' className='bg-accent px-2 py-1 rounded-md hover:bg-gradient-to-r from-primary to-secondary text-[#0072b1] hover:text-white shadow-xl transition duration-300'>
                            <p className=' text-sm md:text-md lg:text-md xl:text-lg'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></p>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://github.com/abir14016' className='bg-accent px-2 py-1 rounded-md hover:bg-gradient-to-r from-primary to-secondary text-gray-400 hover:text-white shadow-xl transition duration-300'>
                            <p className=' text-sm md:text-md lg:text-md xl:text-lg'><FontAwesomeIcon icon="fa-brands fa-github" /></p>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/abir14016/' className='bg-accent px-2 py-1 rounded-md hover:bg-gradient-to-r from-primary to-secondary text-[#fb3958] hover:text-white shadow-xl transition duration-300'>
                            <p className=' text-sm md:text-md lg:text-md xl:text-lg'><FontAwesomeIcon icon="fa-brands fa-instagram" /></p>
                        </a>
                    </div>
                </div>
                <div className='bg-accent m-5 p-5 rounded-2xl'>
                    <div className='flex justify-start mb-3'>
                        <div className='bg-base-100 shadow-xl rounded-lg px-4 mr-3 flex justify-center items-center hover:bg-gradient-to-r from-primary to-secondary text-secondary hover:text-white transition duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
                        </div>
                        <div>
                            <p className='text-sm text-left font-semibold text-gray-500'>Phone</p>
                            <h3 className='text-left font-semibold hover:text-primary transition duration-300'>+880 1989 483010</h3>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className='flex justify-start my-3'>
                        <div className='bg-base-100 shadow-xl rounded-lg px-4 mr-3 flex justify-center items-center hover:bg-gradient-to-r from-primary to-secondary text-[#6ab5b9] hover:text-white transition duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                        </div>
                        <div>
                            <p className='text-sm text-left font-semibold text-gray-500'>Email</p>
                            <h3 className='text-left font-semibold hover:text-primary transition duration-300'>abir14016@gmail.com</h3>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className='flex justify-start my-3'>
                        <div className='bg-base-100 shadow-xl rounded-lg px-4 mr-3 flex justify-center items-center hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white transition duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        </div>
                        <div>
                            <p className='text-sm text-left font-semibold text-gray-500'>Location</p>
                            <h3 className='text-left font-semibold hover:text-primary transition duration-300'>Jhenaidah, Bangladesh</h3>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className='flex justify-start mt-3'>
                        <div className='bg-base-100 shadow-xl rounded-lg px-4 mr-3 flex justify-center items-center hover:bg-gradient-to-r from-primary to-secondary text-[#c17ceb] hover:text-white transition duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div>
                            <p className='text-sm text-left font-semibold text-gray-500'>Birthday</p>
                            <h3 className='text-left font-semibold hover:text-primary transition duration-300'>Dec 16, 1997</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <a className='flex justify center items-center bg-gradient-to-r from-secondary to-primary rounded-3xl px-5 py-3 text-md font-lightbold text-white download-resume-button transition duration-300' href={"https://cutt.ly/2NevwCK"} rel="noreferrer" download>
                        <FontAwesomeIcon icon="fa-solid fa-download" />
                        <p className='ml-2'>Download Resume</p>
                    </a>
                </div>
                <div className='flex md:hidden lg:hidden xl:hidden justify-center mt-5'>
                    <a className='flex justify center items-center bg-gradient-to-r from-secondary to-primary rounded-3xl px-5 py-3 text-md font-lightbold text-white download-resume-button transition duration-300' href="https://drive.google.com/file/d/1F-2OCc8JKksiVVgpICDA71o4Botk1WkY/view?usp=sharing" target="_blank" rel='noreferrer'>
                        <p className='mr-2'>View Resume</p>
                        <FontAwesomeIcon className='mt-1' icon="fa-solid fa-arrow-right" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;