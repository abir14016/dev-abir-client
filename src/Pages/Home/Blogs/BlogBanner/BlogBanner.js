import React from 'react';
import bannerLeft from '../../../../assests/images/blogs/banner/banner-left.jpg';
import bannerRightTop from '../../../../assests/images/blogs/banner/banner-right-top.png';
import bannerRightBottom from '../../../../assests/images/blogs/banner/banner-right-bottom.png';

const BlogBanner = () => {
    return (
        <div className='grid grid-cols-2 gap-x-5'>
            <div>
                <div>
                    <div className=''>
                        <img className='object-cover h-80 w-full' src={bannerLeft} alt="" />
                    </div>
                    <div className='bg-blue-500'>
                        Heading 1
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div>
                    <div>
                        <img className='object-cover h-36 w-full' src={bannerRightTop} alt="" />
                    </div>
                    <div className='bg-blue-500'>
                        Heading2
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