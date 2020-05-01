import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;