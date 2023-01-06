import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Courses.css';
import web from '../../../../assests/images/courses/web.png';
import redux from '../../../../assests/images/courses/redux.png';
import ledp from '../../../../assests/images/courses/ledp.jpg';
import scic from '../../../../assests/images/courses/scic.jpg';
import nodeMongo from '../../../../assests/images/courses/node-mongo.png';
import js from '../../../../assests/images/courses/js.png';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "web",
            subTitle: "complete web development",
            details: "Full-stack web development course organized by PROGRAMMING HERO. It takes 6 to 8 months to complete the course.",
            picture: web,
            topics: ["HTML", "CSS", "Javascript", "React.JS", "Express.JS", "Firebase", "Tailwind", "Bootstrap"],
            status: "completed",
            icon: "fa-solid fa-circle-check"
        },
        {
            id: 2,
            title: "SCIC",
            subTitle: "job hunting battlefield",
            details: "Only the students who have completed main web course of PROGRAMMING HERO ontime and obtain at least average 50% marks for all assignments can access the course.",
            picture: scic,
            topics: ["Resume", "Interview Preparation", "LinkedIn", "Github"],
            status: "completed",
            icon: "fa-solid fa-circle-check"
        },
        {
            id: 3,
            title: "Node-Mongo",
            subTitle: "advanced crash course",
            details: "Only the students who have completed main web course and SCIC both of PROGRAMMING HERO can access the course. This course mainly focuses on backend development",
            picture: nodeMongo,
            topics: ["Node.JS", "MongoDB", "Javascript"],
            status: "running",
            icon: "fa-solid fa-person-running"
        },
        {
            id: 4,
            title: "Redux",
            subTitle: "beginner to advance",
            details: "Only the students who have completed main web course and SCIC both of PROGRAMMING HERO can access the course. This course mainly focuses on state management of react",
            picture: redux,
            topics: ["Redux", "Redux Thunk", "Redux Toolkit"],
            status: "running",
            icon: "fa-solid fa-person-running"
        },
        {
            id: 5,
            title: "Advanced Javascript",
            subTitle: "excilency in professional carrer",
            details: "Only the students who have got hired for a job or internship can access the course. This course mainly focuses on deep learning of javascript",
            picture: js,
            topics: ["Advance Js", "Advance Github"],
            status: "running",
            icon: "fa-solid fa-person-running"
        },
        {
            id: 6,
            title: "LEDP",
            subTitle: "Learning & earning development project",
            details: "This course is organized by the ICT ministry of Bangladesh and foucuses on freelancing.",
            picture: ledp,
            topics: ["HHML", "CSS", "Bootstrap", "Freelancing"],
            status: "completed",
            icon: "fa-solid fa-circle-check"
        },
    ]
    return (
        <div>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-person-chalkboard" /></span>Courses</h2>

            <Swiper
                effect={"coverflow"}
                // autoHeight={true}
                grabCursor={true}
                centeredSlides={true}
                // autoplay={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    scale: 1
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    481: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                pagination={true}
                autoplay={{
                    delay: 1500
                }}
                className="mySwiper"
            >
                {
                    courses.map(course => <SwiperSlide key={course.id}>
                        <div className="card bg-accent shadow-xl">
                            <figure><img className='w-[400px] h-[225px]' src={course.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="card-title">
                                    {course.title}
                                    <div className={`badge ${course.status === "completed" ? "badge-success" : "badge-warning"}`}>
                                        {course.status}
                                        <FontAwesomeIcon className="ml-2" icon={course.icon} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-left text-xs text-secondary">{course.subTitle}</p>
                                </div>
                                <p className="text-left">{course.details}</p>
                                <div className="card-actions justify-start">
                                    {
                                        course.topics.map(topic => <div key={topic} className="badge badge-neutral">{topic}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Courses;