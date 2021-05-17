import React from "react";
import PropTypes from 'prop-types';

const TabsItem = ({tab, activeTab, className, onTabClick}) => {
  return (
    <li className="tabs__item">
      <button
        className={`tabs__button tabs__button${className} ${activeTab === tab ? `tabs__button--active` : ``}`}
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
  tab: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsItem;
