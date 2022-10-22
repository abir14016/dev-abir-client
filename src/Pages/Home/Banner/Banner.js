import React from 'react';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-2 md:px-8 lg:px-28'>
            <div className='text-left md:text-left lg:text-left xl:text-left'>
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
            </div>
            <div className='bg-base-100'>
                <div>
                    <img src="" alt="abir-1" />
                </div>
            </div>
        </div>
    );
};

export default Banner;