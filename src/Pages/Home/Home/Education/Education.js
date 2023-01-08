import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import iu from "../../../../assests/images/education/iu.png";
import college from "../../../../assests/images/education/college.png";
import school from "../../../../assests/images/education/school.png";
import ph from "../../../../assests/images/education/ph.jpg";

const Education = () => {
    const educations = [
        {
            id: 0,
            degreeName: "Bsc. Enggiering in Computer Science & Engineering",
            institution: "Islamic University",
            link: "https://www.iu.ac.bd",
            PassingYear: "2018-2023",
            logo: iu,
            cgpa: "pending..."
        },
        {
            id: 1,
            degreeName: "Higher Secondary Certificate (HSC)",
            institution: "Mia Jinnah Alam Degree College",
            link: "https://www.sohopathi.com/miah-jinnah-alam-degree-college-2/",
            PassingYear: "2016",
            logo: college,
            gpa: "5.00/5.00"
        },
        {
            id: 2,
            degreeName: "Secondary School Certificate (SSC)",
            institution: "Garaganj Secondary School",
            link: "https://www.sohopathi.com/garagonj-high-school/",
            PassingYear: "2013",
            logo: school,
            gpa: "5.00/5.00"
        },
        {
            id: 3,
            degreeName: "Junior School Certificate (JSC)",
            institution: "Garaganj Secondary School",
            link: "https://www.sohopathi.com/garagonj-high-school/",
            PassingYear: "2011",
            logo: school,
            gpa: "4.64/5.00"
        },
        {
            id: 4,
            degreeName: "Complete Web Development Course With Jhankar Mahbub",
            institution: "Programming Hero",
            link: "https://web.programming-hero.com",
            PassingYear: "2022",
            logo: ph,
            status: "completed"
        },
    ]
    return (
        <div className='mt-3 md:mt-10 lg:mt-12 xl:mt-16'>
            <h2 className="text-3xl text-left font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='text-primary mr-3 wave' icon="fa-solid fa-graduation-cap" /></span>Education</h2>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center ml-6 lg:ml-0'>
                {
                    educations.map(education => <div
                        key={education.id}
                        className="lg:w-3/4 md:w-3/4 pl-4 my-3 border-l-[3px] border-primary border-dashed"
                    >
                        <div className='w-10 h-10 -mt-10 -ml-9'>
                            <img style={{ width: "40px", height: "40px" }} className='mask mask-hexagon' src={education.logo} alt="edu_logo" />
                        </div>
                        <div className='mb-4 -mt-7 pl-3 text-left'>
                            <span className='badge badge-lg hover:badge-primary'>{education.PassingYear}</span>
                        </div>
                        <div className='pl-3 mb-8 mt-6 text-left'>
                            <p className='font-semibold'>{education.degreeName} at <a rel="noopener noreferrer" target="_blank" href={education.link} className='link link-hover text-blue-600'>{education.institution}</a></p>
                            <p className='text-slate-600 font-semibold text-sm'>
                                {(education.gpa) ? "gpa" : (education.cgpa) ? "cgpa" : "status"} : {education.gpa || education.status || education.cgpa}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Education;