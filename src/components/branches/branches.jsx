import React from 'react';
import {useInView} from 'react-intersection-observer';
import loadable from '@loadable/component';

const Map = loadable(() => import('../map/map'));


export const city = {
  lat: 56.123,
  lng: 59.540,
  zoom: 5
};

export const points = [
  {
    lat: 56.203,
    lng: 37.595,
    title: `Москва`
  }, {
    lat: 51.533,
    lng: 46.000,
    title: `Саратов`
  }, {
    lat: 56.210,
    lng: 49.100,
    title: `Казань`
  }, {
    lat: 57.165,
    lng: 65.540,
    title: `Тюмень`
  }, {
    lat: 54.989,
    lng: 73.350,
    title: `Омск`
  }, {
    lat: 55.541,
    lng: 82.880,
    title: `Новосибирск`
  }, {
    lat: 61.650,
    lng: 73.390,
    title: `Сургут`
  }, {
    lat: 58.350,
    lng: 56.250,
    title: `Пермь`
  }
];

const Branches = () => {
  const {ref, inView} = useInView({
    threshold: 0,
  });

  return (
    <section className="main__branches branches"  ref={ref}>
      <div className="branches__wrapper container">
        <h2 className="branches__title">Отделения Лига Банка</h2>
        {inView && <Map
          city={city}
          points={points}
        />}
      </div>
    </section>
  );
};

export default Branches;
