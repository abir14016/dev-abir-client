import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const Skill = ({ skill }) => {
    const { icon, title, number } = skill;
    return (
        <div className='flex justify-center'>
            <div style={{ width: "100px" }} className="bg-accent">
                <VisibilitySensor>
                    {({ isVisible }) => {
                        const percentage = isVisible ? number : 0;
                        return (
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                            />
                        );
                    }}
                </VisibilitySensor>
                <img src={icon} alt="/icon" />
            </div>
        </div>
    );
};

export default Skill;