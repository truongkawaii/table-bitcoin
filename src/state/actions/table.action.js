import Actions from './action.type';


export const getData = (payload) => ({
  type: Actions.GET_DATA,
  payload
});

export const getDataSuccess = (payload) => ({
  type: Actions.GET_DATA_SUCCESS,
  payload,
});
export const getDataCurrency = () => ({
  type: Actions.GET_DATA_CURRENCY
});
export const getChangeData = (payload) => ({
  type: Actions.GET_CHANGE_DATA,
  payload
});

export const getDataCurrencySuccess = (payload) => ({
  type: Actions.GET_DATA_CURRENCY_SUCCESS,
  payload
});

