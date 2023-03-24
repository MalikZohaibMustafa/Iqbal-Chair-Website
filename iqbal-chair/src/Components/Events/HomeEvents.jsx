import React from 'react'
import recent from '../../images/EventsImages/recent.png'
import current from '../../images/EventsImages/current.png'
import upcoming from '../../images/EventsImages/upcoming.png'

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeEvents = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        // cssEase: "linear"
    };
    return (
        <>
            <div className=' w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-max'>
                <h1 className='text-center text-7xl text-green-300 uppercase tracking-wider p-4'>Events</h1>
                <div className='w-full md:flex md:gap-1  '>
                    <div className='md:w-96 md:ml-2 ' >
                        <h1 className='uppercase text-center text-xl p-3'>RECENT EVENTS</h1>
                        <div className='w-full'>
                            
                            <Slider {...settings} className='w-full '>   
                                <div >
                                    <img src={recent} alt="" />
                                </div>
                                <div >
                                    <img src={current} alt="" />
                                </div>
                                <div >
                                    <img src={upcoming} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='md:w-96 md:ml-4  '>
                        <h1 className='uppercase text-center text-xl p-3'>Current Events</h1>
                        <div className='w-full '>
                            <Slider {...settings} className='w-full '>

                                <div >
                                    <img src={recent} alt="" />
                                </div>
                                <div >
                                    <img src={current} alt="" />
                                </div>
                                <div >
                                    <img src={upcoming} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='md:w-96 md:ml-4 '>
                        <h1 className='uppercase text-center text-xl p-3'>upcoming Evnets</h1>
                        <div className='w-full '>
                            <Slider {...settings} className='w-full '>

                                <div >
                                    <img src={recent} alt="" />
                                </div>
                                <div >
                                    <img src={current} alt="" />
                                </div>
                                <div >
                                    <img src={upcoming} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='mt-7 w-full flex justify-center p-5 '>
                    <Link to={'/all-events'} className=' bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white border border-indigo-300 w-52 p-2 text-center rounded '>View All Events</Link>
                </div>
            </div>
        </>
    )
}

export default HomeEvents