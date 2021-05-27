import React, {useState} from 'react';
import Dots from '../dots/dots';
import {Carousel as Slider} from 'react-responsive-carousel';
import {PROMOS} from '../../const';
import PropTypes from 'prop-types';

const getSlides = (isWebp) => {
  return PROMOS.map((promo) => {
    return (
      <article key={promo} className={`promo-slider__promo promo promo${promo.className}`}>
        <div className={`promo__wrapper promo__wrapper${promo.className}${isWebp ? `-webp` : ``} container`}>
          <h2 className={`promo__title promo__title${promo.className}`}>Лига Банк</h2>
          <p className={`promo__description promo__description${promo.className}`}>{promo.description}</p>
          {
            promo.link &&
            <a className={`promo__link promo__link${promo.className}`} href={promo.link.href}>
              {promo.link.title}
            </a>
          }
        </div>
      </article>
    );
  });
};

const PromoSlider = ({isWebp}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = getSlides(isWebp);

  const handleSlideChange = (indexSlide) => {
    setActiveIndex(indexSlide);
  };

  return (
    <section className="main__promo-slider promo-slider">
      <h2 className="visually-hidden">Промо предложения</h2>
      <Slider
        selectedItem={0}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        autoPlay={true}
        interval={4000}
        transitionTime={1500}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        onChange={handleSlideChange}
      >
        {slides}
      </Slider>

      <Dots
        className={`promo-slider`}
        slides={slides}
        active={activeIndex}
      />
    </section>
  );
};

PromoSlider.propTypes = {
  isWebp: PropTypes.bool.isRequired,
};

export default PromoSlider;
