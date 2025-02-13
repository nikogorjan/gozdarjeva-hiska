import React from 'react';
import AboutFourThumb from '../../public/assets/images/my-images/h12.jpg';


const AboutFour = () => {
    return (
        <section className="about-four padding-t-120 padding-b-60">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-heading style-left">
                                <span className="section-heading__subtitle bg-white"> <span className="text-gradient fw-semibold">Ocene gostov</span> </span>
                                <h2 className="section-heading__title">Na booking.com nas ocenjujejo z oceno 9.9</h2>
                                <p className="section-heading__desc font-18">Zahvaljujoč edinstveni izkušnji in pristni gostoljubnosti smo prejemniki izjemnih ocen, ki potrjujejo naš trud za vaš popoln oddih.</p>
                            </div>
                            <ul className="check-list">
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-normal text-body font-16">Gostoljubnost, ki presega vsa pričakovanja.</span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-normal text-body font-16">Naša hišica nudi udobje in toplino, ki jo boste občutili že ob vstopu. </span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-normal text-body font-16">Združujemo tradicijo in sodobnost za edinstven oddih.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-four-thumb about-three-thumb">
                            <div className="about-three-thumb__inner text-end">
                                <img src={AboutFourThumb} alt=""/>
                                <div className="project-content">
                                    <div className="project-content__inner">
                                        <h2 className="project-content__number text-gradient"> 9.9 </h2>
                                        <span className="project-content__text font-12">Ocena gostov</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFour;