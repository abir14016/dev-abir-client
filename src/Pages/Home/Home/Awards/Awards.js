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

// import required modules
SwiperCore.use([EffectCards]);

const Awards = () => {
    return (
        <div className='mt-3 md:mt-10 lg:mt-12 xl:mt-16'>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-screwdriver-wrench" /></span>Awards</h2>
            <div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    effectcards={{
                        rotate: 50,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={main} alt="hgd" /></SwiperSlide>
                    <SwiperSlide><img src={main} alt="hgd" /></SwiperSlide>
                    <SwiperSlide><img src={main} alt="hgd" /></SwiperSlide>
                    <SwiperSlide><img src={main} alt="hgd" /></SwiperSlide>
                    <SwiperSlide><img src={main} alt="hgd" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Awards;