// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getChangeData } from '../../state/actions/table.action';
const DropSelect = (props) => {
  const { dataListCurrency } = props;

  const dispatch = useDispatch();
  const changeData = (e) => {
    dispatch(getChangeData(e.target.value));
  };
  let listDataCurrency = null;
  if (dataListCurrency) {
    listDataCurrency = (
      <select onChange={(e) => changeData(e)}>
        {dataListCurrency.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    );
  }
  return (
    <React.Fragment>
      {listDataCurrency}
    </React.Fragment>
  );
};

export default DropSelect;
