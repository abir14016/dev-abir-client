import React from 'react';
import bannerLeft from '../../../../assests/images/blogs/banner/banner-left.jpg';
import bannerRightTop from '../../../../assests/images/blogs/banner/banner-right-top.png';
import bannerRightBottom from '../../../../assests/images/blogs/banner/banner-right-bottom.png';
import './BlogBanner.css';

const BlogBanner = () => {
    const bannerLeftTitle = "What's the future of web development What's the future of web development ?"
    const bannerRightTopTitle = "Knoledge needed for a web developer ?"
    const bannerRightBottomTitle = "What are the basic of web development ?"
    return (
        <div className='grid grid-cols-5 gap-x-5'>

            {/* demo modal */}
            <input type="checkbox" id="demo-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl h-screen">
                    <label htmlFor="demo-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <img className='h-auto max-h-[100%] w-[100%] rounded-2xl border-4 border-blue-800' src={bannerLeft} alt="" />
                </div>
            </div>
            {/* demo modal */}

            <label htmlFor="demo-modal" className='col-span-3 group content cursor-pointer'>
                <div className='content rounded-t-lg group-hover:rounded-b-lg border-t-2 border-l-2 border-r-2 border-blue-900 border-dashed shadow-lg'>
                    <div className="bg-gradient-to-r from-secondary to-primary text-lg absolute top-5 right-5 font-bold text-white px-4 py-1 rounded-full opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out">
                        <h3 className=''>Web Development</h3>
                    </div>
                    <div className="content-overlay"></div>
                    <div className=''>
                        <img className='object-cover h-80 w-full content-image' src={bannerLeft} alt="" />
                    </div>
                    <div className='content-details fadeIn-bottom'>
                        <h3 className='text-3xl text-white font-bold mb-5 italic'>
                            {
                                bannerLeftTitle.length > 35 ? bannerLeftTitle.slice(0, 35) + "..." : bannerLeftTitle
                            }
                        </h3>
                        <p className='content-text text-white text-lg first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left'>Worem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto odio nostrum atque magnam, et explicabo quia voluptates corporis quo earum? Inventore recusandae quidem, obcaecati magni dignissimos aliquam eius ullam aperiam? Ab illum in repudiandae, repellat, deleniti nulla dolor non nesciunt animi minima ullamm.</p>
                    </div>
                </div>
                <p className='content-text bg-gradient-to-r from-secondary to-primary visible group-hover:invisible group-hover:bg-transparent pt-3 pb-5 rounded-b-lg text-3xl text-white text-left px-5 font-serif group-hover:-translate-y-4 duration-150 ease-in'>
                    {
                        bannerLeftTitle.length > 35 ? bannerLeftTitle.slice(0, 35) + "..." : bannerLeftTitle
                    }
                </p>
            </label>

            {/* half done */}

            <div className='flex flex-col gap-3 col-span-2'>
                <label htmlFor="demo-modal" className='col-span-3 group content cursor-pointer'>
                    <div className='content rounded-t-lg group-hover:rounded-b-lg border-t-2 border-l-2 border-r-2 border-blue-900 border-dashed shadow-lg'>
                        <div className="bg-gradient-to-r from-secondary to-primary text-sm absolute top-3 right-3 font-bold text-white px-4 py-1 rounded-full opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out">
                            <h3 className=''>Web Development</h3>
                        </div>
                        <div className="content-overlay"></div>
                        <div className=''>
                            <img className='object-cover h-36 w-full content-image' src={bannerRightTop} alt="" />
                        </div>
                        <div className='content-details fadeIn-bottom'>
                            <h3 className='text-xl text-white font-bold mb-2 italic'>
                                {
                                    bannerLeftTitle.length > 30 ? bannerLeftTitle.slice(0, 30) + "..." : bannerLeftTitle
                                }
                            </h3>
                            <p className='content-text text-white text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left'>Worem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto odio nostrum atque magnam, et explicabo quia voluptates corporis</p>
                        </div>
                    </div>
                    <p className='content-text bg-gradient-to-r from-secondary to-primary visible group-hover:invisible group-hover:bg-transparent pt-2 pb-2 rounded-b-lg text-xl text-white text-left px-5 font-serif group-hover:-translate-y-4 duration-150 ease-in'>
                        {
                            bannerLeftTitle.length > 30 ? bannerLeftTitle.slice(0, 30) + "..." : bannerLeftTitle
                        }
                    </p>
                </label>


                <label htmlFor="demo-modal" className='col-span-3 group content cursor-pointer'>
                    <div className='content rounded-t-lg group-hover:rounded-b-lg border-t-2 border-l-2 border-r-2 border-blue-900 border-dashed shadow-lg'>
                        <div className="bg-gradient-to-r from-secondary to-primary text-sm absolute top-3 right-3 font-bold text-white px-4 py-1 rounded-full opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out">
                            <h3 className=''>Web Development</h3>
                        </div>
                        <div className="content-overlay"></div>
                        <div className=''>
                            <img className='object-cover h-36 w-full content-image' src={bannerRightBottom} alt="" />
                        </div>
                        <div className='content-details fadeIn-bottom'>
                            <h3 className='text-xl text-white font-bold mb-2 italic'>
                                {
                                    bannerRightBottomTitle.length > 30 ? bannerRightBottomTitle.slice(0, 30) + "..." : bannerRightBottomTitle
                                }
                            </h3>
                            <p className='content-text text-white text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left'>Worem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto odio nostrum atque magnam, et explicabo quia voluptates corporis</p>
                        </div>
                    </div>
                    <p className='content-text bg-gradient-to-r from-secondary to-primary visible group-hover:invisible group-hover:bg-transparent pt-2 pb-2 rounded-b-lg text-xl text-white text-left px-5 font-serif group-hover:-translate-y-4 duration-150 ease-in'>
                        {
                            bannerRightBottomTitle.length > 30 ? bannerRightBottomTitle.slice(0, 30) + "..." : bannerRightBottomTitle
                        }
                    </p>
                </label>


            </div>
        </div>
    );
};

export default BlogBanner;