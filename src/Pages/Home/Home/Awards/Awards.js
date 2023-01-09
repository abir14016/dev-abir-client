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

import main from "../../../../assests/images/awards/main.jpg";
import blackBelt from "../../../../assests/images/awards/black_Belt.png";
import demo from "../../../../assests/images/awards/demo.png";

// import required modules
SwiperCore.use([EffectCards]);

const awards = [
    {
        id: 1,
        title: "Web",
        subTitle: "complete web development course finished on time",
        picture: main
    },
    {
        id: 2,
        title: "Black Belt",
        subTitle: "complete web development course finished on time",
        picture: blackBelt
    },
    {
        id: 3,
        title: "More to come..",
        subTitle: "I'm trying to upgrade myself as a web deleloper",
        picture: demo
    },
]

const Awards = () => {
    return (
        <div className='mt-3 md:mt-10 lg:mt-12 xl:mt-16'>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-trophy" /></span>Awards</h2>
            <div className='block md:grid grid-cols-2 gap-10'>
                <div className='hidden md:flex items-center justify-center'>
                    <FontAwesomeIcon className='text-primary text-[200px] md:text-[300px] lg:text-[400px]' icon="fa-solid fa-award" />
                </div>
                <div className='block md:hidden -mb-24'>
                    <FontAwesomeIcon className='text-primary text-[100px] md:text-[300px] lg:text-[400px]' icon="fa-solid fa-award" />
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
                                            <h2 className="card-title text-white">{award.title}</h2>
                                            <button className="btn btn-accent btn-sm">
                                                <FontAwesomeIcon className='text-primary wave' icon="fa-solid fa-eye" />
                                            </button>
                                        </div>
                                        <p className='text-left font-bold text-white'>{award.subTitle}</p>
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