import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Project from '../Project/Project';

const Works = () => {
    const projects = [
        {
            "id": "1",
            "img": "https://i.ibb.co/xLX0CQN/web.jpg",
            "live": "https://outtel-tech.web.app/",
            "repo": "https://github.com/imrannaazir/outtel-public",
            "title": "Outtel-tech",
            "description": "This is a manufacturer website. upload product, purchase, payment, delivery, review.",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "MONGODB", "EXPRESS JS"]
        },
        {
            "id": "2",
            "img": "https://i.ibb.co/xLPgn08/space-y.png",
            "live": "https://space-y-one.web.app/",
            "repo": "https://github.com/imrannaazir/spacy-fontend",
            "title": "Space Y",
            "description": "This is a product stocking site. Add products, update quantity, see all product, login. ",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "MONGODB", "EXPRESS JS"]
        },
        {
            "id": "3",
            "img": "https://i.ibb.co/DQjfjqB/dental-time.jpg",
            "live": "https://dentals-time.web.app/",
            "repo": "https://github.com/imrannaazir/dental-time-client/",
            "title": "Dental Time",
            "description": "This is a doctors portal. patient see and book, payment appointment, login , register",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "MONGODB", "EXPRESS JS"]
        },
        {
            "id": "4",
            "img": "https://i.ibb.co/YRGkrQz/pix-perker.jpg",
            "live": "https://pix-parker.web.app/",
            "repo": "https://github.com/imrannaazir/pix-parker-photography-portfolio",
            "title": "Pix Perker",
            "description": "This is a photography portfolio website, client can see package and choose one.",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "FIREBASE"]
        },
        {
            "id": "5",
            "img": "https://i.ibb.co/MSzwq75/go-hajj.png",
            "live": "https://moonlit-genie-7e3353.netlify.app/",
            "repo": "https://github.com/imrannaazir/go-hajj",
            "title": "Go Hajj",
            "description": "This is a airline agency service provider website. See reviews, graph and blogs",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "React Router"]
        },
        {
            "id": "6",
            "img": "https://i.ibb.co/7WjVs2Q/crypto.jpg",
            "live": "https://cryptonaukri.netlify.app/",
            "repo": "https://github.com/imrannaazir/cryptonaukri",
            "title": "Crypto Noukri",
            "description": "This is a job portal website. Company post job, applicant can apply, login , sign up",
            "skills": ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "MONGODB", "EXPRESS JS"]
        }
    ]
    return (
        <div className='bg-base-100 rounded-2xl mx-2 md:mx-8 lg:mx-28 px-4 md:px-8 lg:px-20 py-4 md:py-8 lg:py-16 my-4 md:my-8 lg:my-16 xl:my-20'>
            <div className='flex justify-start items-center mb-5 md:mb-8 lg:mb-10 xl:mb-12'>
                <h2 className="text-4xl font-Poppins font-bold mr-5"><span><FontAwesomeIcon className='mr-3 text-primary' icon="fa-solid fa-briefcase" /></span>Portfoli</h2>
                <hr className="hidden md:block lg:block xl:block my-4 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded border-0" />
            </div>
            <div className="grid lg:grid-cols-3 gap-12 px-[15%] 4">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Works;