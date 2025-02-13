import React, { useEffect, useRef } from "react";
import '../../public/assets/css/slider.css'
const MarqueeSlider = () => {

    const sliderRef = useRef(null);

    useEffect(() => {
    const slider = sliderRef.current;

    // Duplicates the slider content to achieve continuous effect
    const duplicateSlider = () => {
        const clone = slider.cloneNode(true);
        slider.parentElement.appendChild(clone);
    };

    duplicateSlider();

    return () => {
        if (slider?.parentElement?.children.length > 1) {
        slider.parentElement.removeChild(slider.parentElement.lastChild);
        }
    };
    }, []);

  return (
    <div className="service-slider-section overflow-hidden">
        <div className="service-slider-wrapper d-flex">
            <div ref={sliderRef} className="service-slider d-flex flex-shrink-0">
                <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
                    <span className="service-slider__icon">
                        <img src="assets/images/my-images/hiking.svg" alt="" className="slider-icon"/>
                    </span>
                    <h2 className="service-slider__text mb-0 fw-semibold">Aktivna rekreacija</h2>
                </div>
                <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
                    <span className="service-slider__icon">
                        <img src="assets/images/my-images/bed.svg" alt="" className="slider-icon"/>
                    </span>
                    <h2 className="service-slider__text mb-0 fw-semibold">Sprostitev in počitek</h2>
                </div>
                <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
                    <span className="service-slider__icon">
                        <img src="assets/images/my-images/utensils.svg" alt="" className="slider-icon"/>
                    </span>
                    <h2 className="service-slider__text mb-0 fw-semibold">Prekmurska kulinarika</h2>
                </div>
                <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
                    <span className="service-slider__icon">
                        <img src="assets/images/my-images/location-marker.svg" alt="" className="slider-icon"/>
                    </span>
                    <h2 className="service-slider__text mb-0 fw-semibold">Naravne lepote</h2>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MarqueeSlider;