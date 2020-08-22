// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import RowItem from './RowItem/RowItem';
// eslint-disable-next-line no-unused-vars
import { Spin, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { getData } from '../../state/actions/table.action';
function Table(props) {

  const query = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: '100',
    page: '1',
    sparkline: false,
    price_change_percentage: '1h%2C24h%2C7d'
  };
  const { dataList } = props;
  let listData = null;
  if (dataList) {

    let keyItems = Object.keys(dataList[0]);
    listData = dataList.map((item, index) =>
      (
        <RowItem key={index} item={item} order={index + 1} allKey={keyItems} />
      )
    );
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(query));
  }, []);
  // SPINNER LOADING
  const spinner = (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );

  return (
    <div>

      {dataList ?
        <table>
          {listData}
        </table>
        :
        spinner
      }

    </div>
  );
};


export default React.memo(Table);
