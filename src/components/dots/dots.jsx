import React from 'react';
import PropTypes from 'prop-types';

const Dots = ({className, slides, active}) => {
  return (
    <ul className={`${className}__dots dots`}>
      {slides.map((_, index) => {
        return (
          <li
            className={`dots__dot${index === active ? ` dots__dot--active` : ``}`}
            key={`dot-${index}`}
          />
        );
      })}
    </ul>
  );
};

Dots.propTypes = {
  className: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  active: PropTypes.number.isRequired,
};

export default Dots;
