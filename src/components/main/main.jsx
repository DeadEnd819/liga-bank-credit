import React from 'react';
import {connect} from 'react-redux';
import AuthorizationModal from '../authorization-modal/authorization-modal';
import {getModalFlag} from '../../store/selectors';

const Main = ({isMenuOpen}) => {
  return (
    <main className="main">
      {isMenuOpen && <AuthorizationModal />}
    </main>
  );
};

const mapStateToProps = (store) => ({
  isMenuOpen: getModalFlag(store)
});

export {Main};

export default connect(mapStateToProps)(Main);
