import React from 'react';
import PropTypes from 'prop-types';
import {useOverflowHidden} from '../../hooks/use-owerflow-hidden';
import {useEscapeButton} from '../../hooks/use-escape-button';

const ModalWrapper = ({children, block, onModalClose}) => {
  useOverflowHidden();
  useEscapeButton(onModalClose);

  return (
    <div className="modal">
      <div className={`modal__wrapper ${block}-modal`}>
        {children}
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default ModalWrapper;
