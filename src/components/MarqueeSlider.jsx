import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../public/assets/css/slider.css";

const MarqueeSlider = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate the slider content to achieve a continuous effect
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
              <img
                src="assets/images/my-images/hiking.svg"
                alt=""
                className="slider-icon"
              />
            </span>
            <h2 className="service-slider__text mb-0 fw-semibold">
              {t("marqueeSlider.recreation")}
            </h2>
          </div>
          <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
            <span className="service-slider__icon">
              <img
                src="assets/images/my-images/bed.svg"
                alt=""
                className="slider-icon"
              />
            </span>
            <h2 className="service-slider__text mb-0 fw-semibold">
              {t("marqueeSlider.relaxation")}
            </h2>
          </div>
          <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
            <span className="service-slider__icon">
              <img
                src="assets/images/my-images/utensils.svg"
                alt=""
                className="slider-icon"
              />
            </span>
            <h2 className="service-slider__text mb-0 fw-semibold">
              {t("marqueeSlider.culinary")}
            </h2>
          </div>
          <div className="service-slider__item flex-shrink-0 d-flex align-items-center gap-3">
            <span className="service-slider__icon">
              <img
                src="assets/images/my-images/location-marker.svg"
                alt=""
                className="slider-icon"
              />
            </span>
            <h2 className="service-slider__text mb-0 fw-semibold">
              {t("marqueeSlider.naturalBeauty")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
