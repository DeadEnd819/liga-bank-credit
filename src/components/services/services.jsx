import React, {useState} from 'react';
import {Carousel as Slider} from 'react-responsive-carousel';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import TabsItem from '../tabs-item/tabs-item';
import Dots from '../dots/dots';
import {SERVICES, TabNames} from '../../const';
import PropTypes from 'prop-types';

const getServices = (webP) => {
  console.log()
  return SERVICES.map((promo) => {
    return (
      <div key={promo} className={`services__card-service card-service card-service${promo.className}${webP ? `-webp` : ``} container`}>
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
      </div>
    );
  });
};

const Services = ({webP}) => {
  const [activeTab, setActiveTab] = useState(0);

  const {width} = useWindowDimensions();

  const isDesktop = width > 1023;
  const services = getServices(webP);

  const handleTabChange = (tab) => {
    if (tab.target) {
      setActiveTab(+tab.target.id );
      return;
    }
    setActiveTab(tab);
  };

  return (
    <section className="main__services services">
      {
        isDesktop ?
          <div className="services__tabs tabs">
            <ul className="tabs__list">
              {Object.values(TabNames).map((tab, i) =>
                <TabsItem
                  key={`${i}-${tab}`}
                  id={i}
                  tab={tab}
                  activeIndex={activeTab}
                  className={SERVICES[i].className}
                  onTabClick={handleTabChange} />
              )}
            </ul>

            {services[activeTab]}
          </div>
          :
          <>
            <Slider
              selectedItem={activeTab}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              autoFocus={false}
              autoPlay={false}
              interval={86400000}
              transitionTime={1500}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              onChange={handleTabChange}
            >
              {services}
            </Slider>

            <Dots
              className={`services`}
              slides={services}
              active={activeTab}
            />
          </>
      }
    </section>
  );
};

Services.propTypes = {
  webP: PropTypes.bool.isRequired,
};

export default Services;
