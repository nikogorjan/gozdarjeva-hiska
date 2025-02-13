import React from 'react';

import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import PageTitle from '../common/PageTitle';
import TopHeaderFive from '../components/TopHeaderFive';
import BannerFive from './../components/BannerFive';
import AboutFive from './../components/AboutFive';
import MarqueeSlider from '../components/MarqueeSlider';
import GalleryFive from '../components/GalleryFive';
import FooterFive from '../common/FooterFive';
import TestimonialThree from '../components/TestimonialThree';
import Faq from '../components/Faq';
import AboutFour from '../components/AboutFour';
import ProjectFour from '../components/ProjectFour';
import ContactTop from '../components/ContactTop';

const HomeFive = () => {
    return (
        <>
            <PageTitle title="Gozdarjeva hiška" />

            <OffCanvas />
            <MobileMenu />

            <main className="body-bg">

                {/* TopHeaderFive */}
                <TopHeaderFive />

                {/* Header */}
                <Header
                    headerClass=""
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass=""
                    btnClass="btn btn-main  d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right"
                    showHeaderBtn={false}
                    showOffCanvasBtn={true}
                    offCanvasBtnClass=""
                    showContactNumber={true}
                />

                {/* BannerFive */}
                <BannerFive />

                {/* Testimonial Three */}
                <TestimonialThree/>


                {/* Property */}
                <GalleryFive />

                {/* Faq */}
                <Faq/>

                {/* AboutFive */}
                <AboutFive />

                {/* MarqueeSlider */}
                <MarqueeSlider />

                {/* AboutFour */}
                <AboutFour/>

                {/* ProjectFour */}
                <ProjectFour/>

                <ContactTop/>

                <div className="contact-map address-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.1007714890275!2d16.352517976752747!3d46.66427155257279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f37b53b489b93%3A0xdac678059e9cfe2f!2sGozdarjeva%20hi%C5%A1ka%20M%26K!5e0!3m2!1ssl!2ssi!4v1739417942143!5m2!1ssl!2ssi" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

               

                {/* Footer */}
                <FooterFive />

            </main>
        </>
    );
};

export default HomeFive;