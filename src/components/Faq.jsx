import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FaqAccordion from '../common/FaqAccordion';

const Faq = () => {
    return (
        <>
            <section id='vprasanja' className="faq padding-y-120 bg-white">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-6 pe-xl-5">

                            <SectionHeading
                                headingClass="section-heading style-left"  
                                subtitle="Pogosta vprašanja"
                                subtitleClass="" 
                                title="Odgovori na vsa vaša vprašanja o vikendici" 
                                renderDesc={false}
                                desc="Real estate is a lucrative ind involves the buying selling and reproperties. It Real estate is a lucrative ind involves. Real estate is a lucrative"
                                renderButton={false}
                                renderBesideDesc={false}
                                buttonClass="btn-main"
                                buttonText="View More"
                            />
                            
                            <FaqAccordion accordionClass="" itemClass=""/>
                            
                        </div>
                        <div className="col-lg-6  d-lg-block d-none">
                            <div className="faq-thumb">
                                <img src="assets/images/my-images/h11.jpg" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Faq;