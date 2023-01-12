import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SwiperCore, { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Awards.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import web from "../../../../assests/images/awards/main.jpg";
import blackBelt from "../../../../assests/images/awards/black_belt.png";
import demo from "../../../../assests/images/awards/demo.jpg";
import ph from "../../../../assests/images/awards/ph.svg"

// import required modules
SwiperCore.use([EffectCards]);

const awards = [
    {
        id: 1,
        title: "Web",
        subTitle: "complete web development course finished on time",
        modal: "web-modal",
        picture: web,
        institution: "Programming Hero",
        institutionImage: ph
    },
    {
        id: 2,
        title: "Black Belts",
        subTitle: "complete web development course finished on time",
        modal: "black-belt-modal",
        picture: blackBelt,
        institution: "Programming Hero",
        institutionImage: ph
    },
    {
        id: 3,
        title: "More to come..",
        subTitle: "I'm trying to upgrade myself as a web deleloper",
        modal: "demo-modal",
        picture: demo
    },
]

const Awards = () => {
    return (
        <div className='mt-3 md:mt-10 lg:mt-12 xl:mt-16'>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-trophy" /></span>Awards</h2>

            {/* web modal */}
            <input type="checkbox" id="web-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl h-screen">
                    <label htmlFor="web-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <img className='h-auto max-h-[100%] w-[100%] rounded-2xl border-4 border-blue-800' src={web} alt="" />
                </div>
            </div>
            {/* web modal */}

            {/* black-belt modal */}
            <input type="checkbox" id="black-belt-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl h-screen">
                    <label htmlFor="black-belt-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <img className='h-auto max-h-[100%] w-[100%] rounded-2xl border-4 border-blue-800' src={blackBelt} alt="" />
                </div>
            </div>
            {/* black-belt modal */}

            {/* demo modal */}
            <input type="checkbox" id="demo-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl h-screen">
                    <label htmlFor="demo-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <img className='h-auto max-h-[100%] w-[100%] rounded-2xl border-4 border-blue-800' src={demo} alt="" />
                </div>
            </div>
            {/* demo modal */}

            <div className='block md:grid grid-cols-2 gap-10'>
                <div className='hidden md:flex items-center justify-center'>
                    <FontAwesomeIcon className='text-primary text-[200px] md:text-[300px] lg:text-[400px] animate-pulse' icon="fa-solid fa-award" />
                </div>
                <div className='mx-8'>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        effectcards={{
                            rotate: 50,
                        }}
                        mousewheel={{
                            forceToAxis: true,
                        }}
                        className="mySwiper flex items-center justify-center"
                    >
                        {
                            awards.map(award => <SwiperSlide key={award.id}>
                                <div className="card bg-base-100 shadow-xl image-full h-[200px] md:h-[300px] lg:h-[400px]">
                                    <figure><img className='' src={award.picture} alt="award_image" /></figure>
                                    <div className="card-body">
                                        <div className='flex justify-between items-center'>
                                            <h2 className="card-title text-white font-extrabold text">{award.title}</h2>
                                            <label data-tip="click to see" htmlFor={award.modal} className="tooltip tooltip-primary btn btn-accent cursor-pointer btn-sm flex justify-center items-center">
                                                <div>
                                                    <FontAwesomeIcon className='text-primary wave' icon="fa-solid fa-eye" />
                                                </div>
                                            </label>
                                        </div>
                                        {(award.institutionImage && award.institution) && <div>
                                            <p className='text-left text-white font-bold'>provider: {award.institution}</p>
                                            <img className='-mt-28 ml-8' src={award.institutionImage} alt="institution-logo" />
                                        </div>}
                                        {(!award.institutionImage && !award.institution) && <p className='text-left font-bold text-white'>I'm trying to upgrade myself day by day</p>}
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Awards;