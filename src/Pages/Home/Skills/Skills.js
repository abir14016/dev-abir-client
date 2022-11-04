import React from 'react';

import react from '../../../assests/images/skills/react.svg';
import Skill from '../Skill/Skill';

const skills = () => {
    const skills = [
        {
            id: "1",
            icon: react,
            title: "React.JS",
            number: 100,
        },
        {
            id: "2",
            icon: react,
            title: "React.JS",
            number: 70,
        },
        {
            id: "3",
            icon: react,
            title: "React.JS",
            number: 80,
        },
        {
            id: "4",
            icon: react,
            title: "React.JS",
            number: 20,
        },
        {
            id: "4",
            icon: react,
            title: "React.JS",
            number: 20,
        },
        {
            id: "4",
            icon: react,
            title: "React.JS",
            number: 20,
        },
        {
            id: "4",
            icon: react,
            title: "React.JS",
            number: 20,
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                {
                    skills.map(skill => <Skill
                        key={skill.Id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default skills;