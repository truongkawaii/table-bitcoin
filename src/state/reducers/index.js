import { combineReducers } from 'redux';
import dataCurrencyReducer from './data-currency';
import CurrencyReducer from './currency';
// Combine reducer
const rootReducer = combineReducers({
    currency: CurrencyReducer,
    dataCurrency: dataCurrencyReducer
});

export default rootReducer; 