import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLaptopCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faReact, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ service }) => {
    library.add(fas, faFontAwesome, faReact, faNode, faJsSquare, faLaptopCode, faCodeBranch);
    const { icon, name, about, color } = service;
    return (
        <div className="group flex justify-start border border-accent p-5 rounded-2xl bg-accent shadow-lg">
            <div className="mr-2">
                <div className='relative'>
                    <div class=" bg-base-100 mask mask-hexagon group-hover:rotate-90 group-hover:bg-gradient-to-r from-primary to-secondary duration-500 transform h-24 w-24"></div>
                    <FontAwesomeIcon style={{ color: `${color}` }} className='font-bold absolute left-0 right-0 my-auto bottom-0 top-0 h-[40px] mx-auto w-[40px] text-4xl transform duration-500' icon={icon} />
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