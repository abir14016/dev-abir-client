import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="block md:block lg:flex xl:flex justify-around bg-transparent">
            <div className='bg-base-100'>
                <h4 className='text-4xl text-left'>Hello,</h4>
                <p className='text-4xl text-left'>I'm <span className='text-5xl text-secondary'>Abir Hasan</span></p>
                <div className='text-5xl text-left mt-3'>
                    <Typewriter
                        options={{
                            strings: [
                                'Front End Developer',
                                'Backend Developer',
                                'Javascript Developer',
                                'React Developer',
                                'Full-Strack Developer',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
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