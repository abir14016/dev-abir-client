import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import abir3 from '../../../assests/images/abir/abir-3.png';
import abir4 from '../../../assests/images/abir/abir-4.png';
import Skills from '../Skills/Skills';
import { ProgressBar } from "react-progressbar-fancy";
import './Resume.css';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import Courses from '../Home/Courses/Courses';
import Education from '../Home/Education/Education';
import Awards from '../Home/Awards/Awards';


const Resume = () => {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className='bg-base-100 rounded-2xl mx-2 md:mx-8 lg:mx-28 px-4 md:px-8 lg:px-20 py-4 md:py-8 lg:py-16 my-4 md:my-8 lg:my-16 xl:my-20'>
            <div className='flex justify-start items-center mb-5 md:mb-8 lg:mb-10 xl:mb-12'>
                <h2 className="text-4xl font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='mr-3 text-primary' icon="fa-solid fa-scroll" /></span>Resume</h2>
                <hr className="hidden md:block lg:block xl:block my-4 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded border-0" />
            </div>
            <div className="block md:grid lg:grid grid-cols-2 gap-20 px-[5%] ">
                <div className='bg-secondary rounded-2xl group hover:bg-primary'>
                    <div className='bg-accent -rotate-6 rounded-2xl group-hover:rotate-6 transform duration-700'>
                        <div className='rotate-6 group-hover:-rotate-6 transform duration-700'>
                            <img className='w-[500px] block md:hidden lg:block' src={abir3} alt="abir-3" />
                            <img className='w-[500px] hidden md:block lg:hidden' src={abir4} alt="abir-3" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-4 w-full my-8 md:my-0">
                    <h2 className="text-xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3' icon="fa-solid fa-user-gear" /></span>Working skills</h2>

                    {/* frontend development progress bar */}
                    <div className='mb-2'>
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const score = isVisible ? 90 : 0;
                                return (
                                    <div>
                                        <div className="flex justify-between px-4 pb-2 font-semibold">
                                            <span>Frontend Development</span>
                                            <CountUp start={focus ? 0 : null} end={90} duration={1} redraw={true} suffix="%">
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <ProgressBar
                                            primaryColor='#f84f54'
                                            secondaryColor='#de2674'
                                            hideText
                                            score={score}
                                        />
                                    </div>
                                );
                            }}
                        </VisibilitySensor>
                    </div>

                    {/* backend development progress bar */}
                    <div className='mb-2'>
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const score = isVisible ? 70 : 0;
                                return (
                                    <div>
                                        <div className="flex justify-between px-4 pb-2 font-semibold">
                                            <span>Backend Development</span>
                                            <CountUp start={focus ? 0 : null} end={70} duration={1} redraw={true} suffix="%">
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <ProgressBar
                                            primaryColor='#f84f54'
                                            secondaryColor='#de2674'
                                            hideText
                                            score={score}
                                        />
                                    </div>
                                );
                            }}
                        </VisibilitySensor>
                    </div>

                    {/* ui/ux design progress bar */}
                    <div className='mb-2'>
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const score = isVisible ? 85 : 0;
                                return (
                                    <div>
                                        <div className="flex justify-between px-4 pb-2 font-semibold">
                                            <span>Ui/Ux Design</span>
                                            <CountUp start={focus ? 0 : null} end={85} duration={1} redraw={true} suffix="%">
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <ProgressBar
                                            primaryColor='#f84f54'
                                            secondaryColor='#de2674'
                                            hideText
                                            score={score}
                                        />
                                    </div>
                                );
                            }}
                        </VisibilitySensor>
                    </div>

                    {/* app development progress bar */}
                    <div className='mb-2'>
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const score = isVisible ? 50 : 0;
                                return (
                                    <div>
                                        <div className="flex justify-between px-4 pb-2 font-semibold">
                                            <span>App Development</span>
                                            <CountUp start={focus ? 0 : null} end={50} duration={1} redraw={true} suffix="%">
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <ProgressBar
                                            primaryColor='#f84f54'
                                            secondaryColor='#de2674'
                                            hideText
                                            score={score}
                                        />
                                    </div>
                                );
                            }}
                        </VisibilitySensor>
                    </div>

                    {/* problem solving progress bar */}
                    <div>
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const score = isVisible ? 40 : 0;
                                return (
                                    <div>
                                        <div className="flex justify-between px-4 pb-2 font-semibold">
                                            <span>Problem Solving</span>
                                            <CountUp start={focus ? 0 : null} end={40} duration={1} redraw={true} suffix="%">
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <ProgressBar
                                            primaryColor='#f84f54'
                                            secondaryColor='#de2674'
                                            hideText
                                            score={score}
                                        />
                                    </div>
                                );
                            }}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <Courses></Courses>
            <Education></Education>
            <Awards></Awards>
        </div>
    );
};

export default Resume;