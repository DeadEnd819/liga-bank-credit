import React, {useState} from 'react';
import {Carousel as Slider} from 'react-responsive-carousel';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import TabsItem from '../tabs-item/tabs-item';
import {SERVICES, TabNames} from '../../const';

const getServices = () => {
  return SERVICES.map((promo) => {
    return (
      <article key={promo} className={`services__card-service card-service card-service${promo.className} container`}>
        <h2 className={`card-service__title card-service__title${promo.className}`}>{promo.title}</h2>
        <ul className={`card-service__list card-service__list${promo.className}`}>
          {
            promo.list.map((item) =>
              <li key={item} className="card-service__item">
                {item}
              </li>
            )
          }
        </ul>
        {promo.description}
        {
          promo.link &&
          <a className={`card-service__link card-service__link${promo.className}`} href={promo.link.href}>
            {promo.link.title}
          </a>
        }
      </article>
    );
  });
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TabNames.DEPOSITS);

  const {width} = useWindowDimensions();

  const isDesktop = width > 1023;
  const services = getServices();

  const handleSlideChange = (indexSlide) => {
    setActiveIndex(indexSlide);
  };

  const handleTabClick = (evt) => {
    if (!evt.target.textContent) {
      return;
    }

    setActiveTab(evt.target.textContent);
  };

  const getTabComponent = () => {
    switch (activeTab) {
      case TabNames.DEPOSITS:
        return services[0];
      case TabNames.CREDITS:
        return services[1];
      case TabNames.INSURANCE:
        return services[2];
      case TabNames.SERVICES:
        return services[3];
      default:
        return null;
    }
  };

  return (
    <section className="services">
      {
        isDesktop ?
          <div className="services__tabs tabs">
            <ul className="tabs__list">
              {Object.values(TabNames).map((tab, i) =>
                <TabsItem
                  key={`${i}-${tab}`}
                  tab={tab}
                  activeTab={activeTab}
                  className={SERVICES[i].className}
                  onTabClick={handleTabClick} />
              )}
            </ul>

            {getTabComponent()}
          </div>
          :
          <>
            <Slider
              selectedItem={0}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              autoPlay={false}
              interval={4000}
              transitionTime={1500}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              onChange={handleSlideChange}
            >
              {services}
            </Slider>
            <ul className="promo-slider__list">
              {services.map((_, index) => {
                return (
                  <li
                    className={`promo-slider__item ${index === activeIndex ? `promo-slider__item--active` : ``}`}
                    key={`sliderRadio${index}`}
                  />
                );
              })}
            </ul>
          </>
      }
    </section>
  );
};

export default Services;
