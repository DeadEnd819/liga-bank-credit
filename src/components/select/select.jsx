import React from 'react';
import {useSelect} from 'downshift';
import {SELECT_DEFAULT_TITLE} from '../../const';
import PropTypes from 'prop-types';

const Select = ({onTypeChange, items}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: onTypeChange
  });

  return (
    <div className="form-calculator__wrapper-step">
      <h3 className="form-calculator__title">Шаг 1. Цель кредита</h3>
      <div className={`form-calculator__select-wrapper${isOpen ? ` form-calculator__select-wrapper--active` : ``}`}>
        <button
          className="form-calculator__select"
          type="button"
          {...getToggleButtonProps()}
        >
          {selectedItem || SELECT_DEFAULT_TITLE}
        </button>
        <ul
          className="form-calculator__option-list"
          {...getMenuProps()}
        >
          {isOpen &&
          items.map((item, index) => (
            <li
              className="form-calculator__option"
              key={`${item}${index}`}
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default Select;
