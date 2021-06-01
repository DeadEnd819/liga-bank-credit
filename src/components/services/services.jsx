import React, {useState} from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import TabsItem from '../tabs-item/tabs-item';
import Slider from '../slider/slider';
import {SERVICES, TabNames, WindowWidth, SERVICES_SLIDER_OPTIONS} from '../../const';

const getServices = (isWebp) => {
  return SERVICES.map((promo) => {
    return (
      <div key={promo} className={`services__card-service card-service card-service${promo.className}${isWebp ? `-webp` : ``} container`}>
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

const Services = ({isWebp}) => {
  const [activeTab, setActiveTab] = useState(0);

  const {width} = useWindowDimensions();

  const isDesktop = width > WindowWidth.DESKTOP;
  const services = getServices(isWebp);

  const handleTabChange = (tab) => {
    if (tab.target) {
      setActiveTab(+tab.target.id );
      return;
    }

    setActiveTab(tab);
  };

  return (
    <section className="main__services services">
      <h2 className="visually-hidden">Предоставляемые услуги</h2>
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
          <Slider
            option={SERVICES_SLIDER_OPTIONS}
            slides={services}
            onChange={handleTabChange}
            activeItem={activeTab}
            dotClassName={`services`}
          />
      }
    </section>
  );
};

Services.propTypes = {
  isWebp: PropTypes.bool.isRequired,
};

export default Services;
