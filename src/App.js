// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './App.css';
import './assets/css/main.css';
import 'antd/dist/antd.css';
// eslint-disable-next-line no-unused-vars
import Menu from './components/menu/Menu';
// eslint-disable-next-line no-unused-vars
import Table from '../src/components/table/table';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCurrency, getData } from './state/actions/table.action';
// eslint-disable-next-line no-unused-vars
import DropSelect from './components/DropSelect/DropSelect';

function App() {

  const dataList = useSelector(state => state.dataCurrency.data);
  const dataListCurrency = useSelector(state => state.currency.data);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    // dispatch(getDataCurrency());
  }, []);

  return (
    <div className="App">
      <Menu />
      <DropSelect dataListCurrency={dataListCurrency} />
      <h1 className="title">Top 100 Coins by Market Capitalization</h1>
      <div className="container">
        <Table dataList={dataList} />
      </div>
    </div>
  );
}

export default App;
