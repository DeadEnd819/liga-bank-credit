import React from "react";
import PropTypes from 'prop-types';

const TabsItem = ({id, tab, activeIndex, className, onTabClick}) => {
  return (
    <li className="tabs__item">
      <button
        className={`tabs__button tabs__button${className} ${activeIndex === id ? `tabs__button--active` : ``}`}
        id={id}
        type="button"
        aria-label={`Показать ${tab}`}
        onClick={onTabClick}
      >
        {tab}
      </button>
    </li>
  );
};

TabsItem.propTypes = {
  id: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsItem;
