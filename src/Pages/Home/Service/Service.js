import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLaptopCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faReact, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ service }) => {
    library.add(fas, faFontAwesome, faReact, faNode, faJsSquare, faLaptopCode, faCodeBranch);
    const { icon, name, about, color } = service;
    return (
        // <div className='flex justify-start border border-blue-400 p-5 rounded-2xl'>
        //     <div className='mr-2 md:mr-3 lg:mr-4'>
        //         <img className='w-1/2' src={icon} alt="service-pic" />
        //     </div>
        //     <div>
        //         <h2 className='text-start text-xl font-bold'>{name}</h2>
        //         <p className='text-start mt-3 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta repellendus aut officia dolor? Voluptate nihil sequi, aliquam</p>
        //     </div>
        // </div>

        <div className="group flex justify-start border border-blue-400 p-5 rounded-2xl ">
            <div className="">
                <div className='relative'>
                    <div class=" bg-base-300 mask mask-hexagon group-hover:rotate-90 group-hover:bg-secondary duration-500 transform h-24 w-24 "></div>
                    <img src={icon} alt="/" className=" absolute left-0 right-0 my-auto bottom-0 top-0 h-[40px] mx-auto w-[40px]  text-4xl text-secondary group-hover:text-base-100 transform duration-500" />
                </div>
            </div>

            <div>
                <h3 className="text-start text-xl font-bold">{name}</h3>
                <p className='text-start mt-3 text-gray-500 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde illo, dolore aliquam provident fuga saepe nihil incidunt harum distinctio.</p>
            </div>
        </div>
    );
};

export default Service;