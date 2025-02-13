import React from 'react';

const GalleryFive = () => {
    return (
        <section className="gallery-section padding-y-120 bg-white">
            <div className="container container-two">
                <div className="section-heading">
                    <span className="section-heading__subtitle bg-transparent"> <span className="text-gradient fw-semibold">Galerija</span> </span>
                    <h2 className="section-heading__title">Ujemite čudovite edinstvene trenutke in odkrijte čarobnost.</h2>
                </div>
                
                <div className="row gy-4">
                    <div className="col-lg-4 col-sm-5 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h1.jpg" alt="" className="cover-img"/>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-7 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h2.jpg" alt="" className="cover-img"/>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-7 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h3.jpg" alt="" className="cover-img"/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-5 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h4.jpg" alt="" className="cover-img"/>
                            
                        </div>
                    </div>
                    {/*<div className="col-lg-4 col-sm-5 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h5.jpg" alt="" className="cover-img"/>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-7 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h6.jpg" alt="" className="cover-img"/>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-7 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h9.jpg" alt="" className="cover-img"/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-5 col-xs-6">
                        <div className="gallery-thumb">
                            <img src="assets/images/my-images/h10.jpg" alt="" className="cover-img"/>
                            
                        </div>
                    </div>*/}
                </div>
            </div>
        </section>
    );
};

export default GalleryFive;