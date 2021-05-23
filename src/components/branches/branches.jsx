import React from 'react';
import {YMaps, Map as YandexMap, Placemark} from 'react-yandex-maps';
import {MapData, MARK_COORDINATES} from '../../const';

const Branches = () => {
  const {STATE, OPTIONS} = MapData;

  return (
    <section className="main__branches branches">
      <div className="branches__wrapper container">
        <h2 className="branches__title">Отделения Лига Банка</h2>
        <YMaps>
          <div className="branches__map-wrapper">
            <YandexMap
              defaultState={STATE}
              width="100%"
              height="100%"
            >
              {MARK_COORDINATES.map((item) => (
                <Placemark
                  key={item}
                  geometry={item}
                  options={OPTIONS}
                />
              ))}
            </YandexMap>
          </div>
        </YMaps>
      </div>
    </section>
  );
};

export default Branches;
