import React from 'react';
import Slider from "react-slick";

import SectionHeading from '../common/SectionHeading';
import TestimonialThreeItem from './items/TestimonialThreeItem';
import { useTranslation } from 'react-i18next';

// Testimonial Three Data images
import userThumb1 from '../../public/assets/images/my-images/ava-b.png'; 
import userThumb2 from '../../public/assets/images/my-images/ava-j.png'; 
import userThumb3 from '../../public/assets/images/my-images/ava-s.png'; 

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
    const { t } = useTranslation();
    const slider = React.useRef(null);

    // Create testimonial data using translation keys
    const testimonialThreeContents = [
        {
            image: userThumb1,
            name: 'Branka',
            designation: '',
            desc: t("testimonials.branka")
        },
        {
            image: userThumb2,
            name: 'Jan',
            designation: '',
            desc: t("testimonials.jan")
        },
        {
            image: userThumb3,
            name: 'Sonja',
            designation: '',
            desc: t("testimonials.sonja")
        },
        {
            image: userThumb3,
            name: 'Sandin',
            designation: '',
            desc: t("testimonials.sandin")
        },
        {
            image: userThumb1,
            name: 'Bojan',
            designation: '',
            desc: t("testimonials.bojan")
        },
    ];

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
                                        subtitle={t("sectionHeading.subtitle")}
                                        subtitleClass=""
                                        title={t("sectionHeading.title")}
                                        renderDesc={false}
                                        desc={t("sectionHeading.desc")}
                                        renderButton={false}
                                        renderBesideDesc={true}
                                        buttonClass="btn-main"
                                        buttonText={t("sectionHeading.buttonText")}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="testimonials-three__wrapper overflow-hidden">
                                    <Slider {...settings} ref={slider}>
                                        {testimonialThreeContents.map((testimonialThreeItem, testimonialThreeItemIndex) => {
                                            return (
                                                <TestimonialThreeItem 
                                                    testimonialThreeItem={testimonialThreeItem} 
                                                    key={testimonialThreeItemIndex} 
                                                />
                                            )
                                        })}
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
