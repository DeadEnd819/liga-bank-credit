import React from 'react';

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

export default Dots;
