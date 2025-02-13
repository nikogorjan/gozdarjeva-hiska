import React from 'react';
import { Link } from 'react-router-dom';

const AboutFive = () => {
    return (
        <section className="about-five padding-y-120">
            <div className="container container-two">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-five__thumbs">
                            <div className="row gy-4">
                                <div className="col-sm-6 col-6">
                                    <div className="about-five__thumb one h-100 d-flex">
                                        <img src="assets/images/my-images/t3000.png" alt="Image"/>

                                    </div>
                                </div>
                                <div className="col-sm-6 col-6">
                                    <div className="about-five__thumb two">
                                        <img src="assets/images/my-images/stolp.png" alt="Image"/>
                                    </div>
                                    <div className="about-five__thumb three">
                                        <img src="assets/images/my-images/orchids.png" alt="Image"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 ps-xl-5">
                        <div className="about-contents">
                            <div className="section-heading style-left">
                                <span className="section-heading__subtitle"> <span className="text-gradient fw-semibold">Odkrijte Prekmurje</span> </span>
                                <h2 className="section-heading__title">V Prekmurju vas čaka ogromno zanimivosti, s katerimi se lahko razgibate</h2>

                                <ul className="check-list mt-4 mt-lg-5">
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text text-body fw-normal font-16">Rekreirajte se in uživajte v naravnih lepotah</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text text-body fw-normal font-16"> Po aktivnem dnevu se sprostite v naši prijetni hišici</span>
                                    </li>
                                </ul>
                                
                                <p className="section-heading__desc">Pridružite se nam in odkrijte pravo harmonijo med aktivnostjo in počitkom v srcu Prekmurja.</p>

                                <div className="mt-4">
                                    <Link to='https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847' className="simple-btn text-heading fw-semibold">Rezerviraj zdaj!
                                        <span className="icon-right text-gradient"> <i className="fas fa-arrow-right"></i></span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFive;