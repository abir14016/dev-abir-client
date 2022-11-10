import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html from '../../../assests/images/skills/html5.svg';
import css from '../../../assests/images/skills/css3.svg';
import tailwind from '../../../assests/images/skills/tailwind.svg';
import daisyUI from '../../../assests/images/skills/daisyUI.png';
import bootstrap from '../../../assests/images/skills/bootstrap.svg';
import javascript from '../../../assests/images/skills/javascript.svg';
import react from '../../../assests/images/skills/react.svg';
import typescript from '../../../assests/images/skills/typescript.svg';
import nextjs from '../../../assests/images/skills/nextJS.svg';
import redux from '../../../assests/images/skills/redux.svg';
import nodejs from '../../../assests/images/skills/nodejs.svg';
import expressjs from '../../../assests/images/skills/express-js.svg';
import nongodb from '../../../assests/images/skills/mongoDB.svg';
import firebase from '../../../assests/images/skills/firebase.svg';
import git from '../../../assests/images/skills/git.svg';
import c from '../../../assests/images/skills/c.svg';
import cPlus from '../../../assests/images/skills/c++.svg';
import python from '../../../assests/images/skills/python.svg';
import FundamentalSkill from '../FundamentalSkill/FundamentalSkill';
import FrontendSkill from '../FrontendSkill/FrontendSkill';
import BackendAndPlanguage from '../BackendAndPlanguage/BackendAndPlanguage';

const Skills = () => {
    //fundamental skills data
    const fundameltalSkills = [
        {
            id: "1",
            icon: html,
            title: "HTML-5",
            number: 70,
        },
        {
            id: "2",
            icon: css,
            title: "CSS-3",
            number: 80,
        },
        {
            id: "3",
            icon: tailwind,
            title: "Tailwind",
            number: 80,
        },
        {
            id: "4",
            icon: daisyUI,
            title: "DaisyUI",
            number: 20,
        },
        {
            id: "5",
            icon: bootstrap,
            title: "Bootstrap",
            number: 20,
        },
        {
            id: "6",
            icon: git,
            title: "Git",
            number: 20,
        }
    ]

    //frontend skills data
    const frontendSkills = [
        {
            id: "1",
            icon: javascript,
            title: "Javascript",
            number: 20,
        },
        {
            id: "2",
            icon: react,
            title: "React.JS",
            number: 20,
        },
        {
            id: "3",
            icon: typescript,
            title: "Typescript",
            number: 20,
        },
        {
            id: "4",
            icon: nextjs,
            title: "NextJS",
            number: 20,
        },
        {
            id: "5",
            icon: redux,
            title: "Redux",
            number: 20,
        },
        {
            id: "6",
            icon: firebase,
            title: "Firebase",
            number: 20,
        }
    ]

    //backend and programming language skills data
    const backendAndPlanguages = [
        {
            id: "1",
            icon: nodejs,
            title: "NodeJS",
            number: 20,
        },
        {
            id: "2",
            icon: expressjs,
            title: "ExpressJS",
            number: 20,
        },
        {
            id: "3",
            icon: nongodb,
            title: "MongoDB",
            number: 20,
        },
        {
            id: "4",
            icon: c,
            title: "C",
            number: 20,
        },
        {
            id: "5",
            icon: cPlus,
            title: "C++",
            number: 20,
        },
        {
            id: "6",
            icon: python,
            title: "Python",
            number: 20,
        }
    ]
    return (
        <div className='mt-3 md:mt-10 lg:mt-12 xl:mt-16'>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-screwdriver-wrench" /></span>Technical Skills</h2>

            {/* fundamental skill map */}
            <div className='border-2 border-primary rounded-3xl py-2 md:py-4 lg:py-5 px-5 md:px-0 my-10 bg-accent'>
                <h3 className='text-2xl font-Poppins my-5 text-slate-500 font-semibold'>Fundamental</h3>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10'>
                    {
                        fundameltalSkills.map(fundamentalSkill => <FundamentalSkill
                            key={fundamentalSkill.id}
                            fundamentalSkill={fundamentalSkill}
                        ></FundamentalSkill>)
                    }
                </div>
            </div>

            {/* frontend skills map */}
            <div className='border-2 border-primary rounded-3xl py-2 md:py-4 lg:py-5 px-5 md:px-0 my-10 bg-accent'>
                <h3 className='text-2xl font-Poppins my-5 text-slate-500 font-semibold'>Frontend</h3>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10'>
                    {
                        frontendSkills.map(frontendSkill => <FrontendSkill
                            key={frontendSkill.id}
                            frontendSkill={frontendSkill}
                        ></FrontendSkill>)
                    }
                </div>
            </div>

            {/* backend and programming languages map */}
            <div className='border-2 border-primary rounded-3xl py-2 md:py-4 lg:py-5 px-5 md:px-0 my-10 bg-accent'>
                <h3 className='text-2xl font-Poppins my-5 text-slate-500 font-semibold'>Backend & Programming Languages</h3>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10'>
                    {
                        backendAndPlanguages.map(backendAndPlanguage => <BackendAndPlanguage
                            key={backendAndPlanguage.id}
                            backendAndPlanguage={backendAndPlanguage}
                        ></BackendAndPlanguage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;