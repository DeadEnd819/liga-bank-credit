import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Dots from '../dots/dots';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MemoCarousel = memo(Carousel);

const Slider = ({option, slides, onChange, activeItem, dotClassName}) => {
  return (
    <>
      <MemoCarousel
        {...option}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        selectedItem={activeItem}
        onChange={onChange}
      >
        {slides}
      </MemoCarousel>

      <Dots
        className={dotClassName}
        slides={slides}
        active={activeItem}
      />
    </>
  );
};

Slider.propTypes = {
  option: PropTypes.object.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
  dotClassName: PropTypes.string.isRequired,
};

export default Slider;
