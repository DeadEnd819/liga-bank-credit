import {combineReducers} from 'redux';
import {credit} from './credit/credit';
import {authorization} from './authorization/authorization';

export const NameSpace = {
  CREDIT: `CREDIT`,
  AUTHORIZED: `AUTHORIZED`,
};

const {CREDIT, AUTHORIZED} = NameSpace;

export default combineReducers({
  [CREDIT]: credit,
  [AUTHORIZED]: authorization,
});
