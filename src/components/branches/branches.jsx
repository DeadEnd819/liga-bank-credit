import React from 'react';
import {useInView} from 'react-intersection-observer';
import loadable from '@loadable/component';
import {mapData, mapPoints} from '../../const';

const Map = loadable(() => import('../map/map'));

const Branches = () => {
  const {ref, inView} = useInView({
    threshold: 0,
  });

  return (
    <section className="main__branches branches" id="branches" ref={ref}>
      <div className="branches__wrapper container">
        <h2 className="branches__title">Отделения Лига Банка</h2>
        {inView && <Map
          data={mapData}
          points={mapPoints}
        />}
      </div>
    </section>
  );
};

export default Branches;
