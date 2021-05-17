import React, {useState} from 'react';
import {Carousel as Slider} from 'react-responsive-carousel';
import {PROMOS} from '../../const';

const getSlides = () => {
  return PROMOS.map((promo) => {
    return (
      <article key={promo} className={`slide__promo promo promo${promo.className}`}>
        <div className={`promo__wrapper promo__wrapper${promo.className} container`}>
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

const PromoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (indexSlide) => {
    setActiveIndex(indexSlide);
  };

  return (
    <section className="promo-slider">
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
        {getSlides()}
      </Slider>
      <ul className="promo-slider__list">
        {getSlides().map((_, index) => {
          return (
            <li
              className={`promo-slider__item ${index === activeIndex ? `promo-slider__item--active` : ``}`}
              key={`sliderRadio${index}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default PromoSlider;
