import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const FrontendSkill = ({ frontendSkill }) => {
    const { icon, title, number } = frontendSkill;
    return (
        <div className='flex justify-center'>
            <div>
                <VisibilitySensor>
                    {({ isVisible }) => {
                        const percentage = isVisible ? number : 0;
                        return (
                            <div className="bg-base-100 rounded-full w-[90px] md:w-[90px] lg:w-[100px]">
                                <CircularProgressbar className='font-bold'
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        // Text size
                                        textSize: '17px',
                                        pathTransitionDuration: 1.5,
                                        // Colors
                                        pathColor: '#de2674',
                                        textColor: 'rgb(100 116 139)',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#ffffff',
                                    })}
                                />
                            </div>
                        );
                    }}
                </VisibilitySensor>
                <div className='flex justify-center mt-2'>
                    <img style={{ width: "30px", height: "30px" }} src={icon} alt="/icon" />
                </div>
                <p className='normal-case font-Secular font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>{title}</p>
            </div>
        </div>
    );
};

export default FrontendSkill;