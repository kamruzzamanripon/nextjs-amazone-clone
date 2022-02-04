import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className='relative carousel-slider'>
            <div className='absolute w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'></div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                animationHandler
            >
                <div>
                    <img loading='lazy' src="https://images.unsplash.com/photo-1623531136524-040423c113e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://images.unsplash.com/photo-1643684627758-8c586e58a2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://images.unsplash.com/photo-1643620597569-13d48ab58b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;