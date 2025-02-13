import React from 'react';
import Slider from "react-slick";

import SectionHeading from '../common/SectionHeading';
import { testimonialThreeContents } from '../data/HomeThreeData/HomeThreeData';
import TestimonialThreeItem from './items/TestimonialThreeItem';

var settings = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
};

const TestimonialThree = () => {

    const slider = React.useRef(null);
    
    return (
        <>
        <section id='stranke' className="testimonials-three padding-y-120">
            <div className="container container-two">
                <div className="testimonials-three__inner position-relative">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-5">
                            <div className="testimonials-three__box">

                                <SectionHeading
                                    headingClass="section-heading style-left mb-0"  
                                    subtitle="Mnenja"
                                    subtitleClass="" 
                                    title="Kaj pravijo naši gostje" 
                                    renderDesc={false}
                                    desc="Preberite izkušnje zadovoljnih obiskovalcev in odkrijte, zakaj se vedno znova vračajo v našo vikendico."
                                    renderButton={false}
                                    renderBesideDesc={true}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />
                                
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="testimonials-three__wrapper overflow-hidden">
                                <Slider {...settings} ref={slider}>
                                    {
                                        testimonialThreeContents.map((testimonialThreeItem, testimonialThreeItemIndex) => {
                                            return (
                                                <TestimonialThreeItem testimonialThreeItem={testimonialThreeItem} key={testimonialThreeItemIndex}/>
                                            )
                                        })
                                    }
                                </Slider>
                                <button className='slick-arrow slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                                    <i className="fas fa-arrow-left"></i> 
                                </button>
                                <button className='slick-arrow slick-next' onClick={() => slider?.current?.slickNext()}> 
                                    <i className="fas fa-arrow-right"></i> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        </>
    );
};

export default TestimonialThree;