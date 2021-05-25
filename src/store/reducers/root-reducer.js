import {combineReducers} from 'redux';
import {credit} from './credit/credit';
import {authorization} from './authorization/authorization';
import {request} from './request/request';

export const NameSpace = {
  CREDIT: `CREDIT`,
  AUTHORIZED: `AUTHORIZED`,
  REQUEST: `REQUEST`,
};

const {CREDIT, AUTHORIZED, REQUEST} = NameSpace;

export default combineReducers({
  [CREDIT]: credit,
  [AUTHORIZED]: authorization,
  [REQUEST]: request,
});
