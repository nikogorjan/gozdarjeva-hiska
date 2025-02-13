import React from 'react';
import { Link } from 'react-router-dom';

const BannerFive = () => {
    return (
        <section className="banner-five banner bg-white">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="banner-inner position-relative">
                            <div className="banner-content">
                                <span className="banner-content__subtitle text-uppercase font-14">Vinogradski raj</span>
                                <h1 className="banner-content__title">Uživajte v čarobnosti Dobrovniških vinogradov</h1>
                                <p className="banner-content__desc font-18">Pustite vsakdan za seboj in se potopite v oazo miru, kjer narava, tradicija in izvrstna vina ustvarjajo nepozabno doživetje.</p>
                                <div className="banner-content__button">
                                    <Link to="https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847" className="btn btn-main fw-normal">Rezervacija
                                        <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
                                    </Link>
                                </div>
                            </div>            
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-0 order-1">
                        <div className="banner-five__thumb">
                            <img src="assets/images/my-images/h0.jpg" alt=""/>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerFive;