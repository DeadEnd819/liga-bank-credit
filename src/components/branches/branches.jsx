import React from 'react';
import {useInView} from 'react-intersection-observer';
import loadable from '@loadable/component';
import {MAP_DATA, MAP_POINTS} from '../../const';

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
          data={MAP_DATA}
          points={MAP_POINTS}
        />}
      </div>
    </section>
  );
};

export default Branches;
