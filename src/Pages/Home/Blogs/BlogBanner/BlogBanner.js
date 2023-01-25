import React from 'react';
import bannerLeft from '../../../../assests/images/blogs/banner/banner-left.jpg';
import bannerRightTop from '../../../../assests/images/blogs/banner/banner-right-top.png';
import bannerRightBottom from '../../../../assests/images/blogs/banner/banner-right-bottom.png';
import './BlogBanner.css';

const BlogBanner = () => {
    return (
        <div className='grid grid-cols-5 gap-x-5'>
            <div className='col-span-3 group '>
                <div className='content rounded-xl'>
                    <div class="content-overlay"></div>
                    <div className=''>
                        <img className='object-cover h-80 w-full content-image' src={bannerLeft} alt="" />
                    </div>
                    <div className='content-details fadeIn-bottom'>
                        <h3 className='text-3xl text-white font-bold'>heading222</h3>
                        <p className='content-text text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto odio nostrum atque magnam, et explicabo quia voluptates corporis quo earum? Inventore recusandae quidem, obcaecati magni dignissimos aliquam eius ullam aperiam? Ab illum in repudiandae, repellat, deleniti nulla dolor non nesciunt animi minima ullam. Quos autem voluptatibus beatae voluptas expedita unde optio dolore. Voluptas asperiores amet, sequi sapiente voluptatibus deserunt nesciunt enim accusantium deleniti, voluptate ullam, rerum atque labore unde?</p>
                    </div>
                    <div className='bg-blue-500 group-hover:hidden'>
                        <p className='content-text'>heading1</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 col-span-2'>
                <div>
                    <div>
                        <img className='object-cover h-36 w-full' src={bannerRightTop} alt="" />
                    </div>
                    <div className='bg-blue-500'>
                        Heading22
                    </div>
                </div>
                <div>
                    <div>
                        <img className='object-cover h-36 w-full' src={bannerRightBottom} alt="" />
                    </div>
                    <div className='bg-blue-500'>
                        Heading3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;