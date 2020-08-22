// eslint-disable-next-line no-unused-vars
import React from 'react';

const RowTitle = (props) => {
  const { allKey } = props;
  let updateKey = allKey.filter(key => {
    return key === 'image'
      || key === 'name'
      || key === 'symbol'
      || key === 'current_price'
      || key === 'price_change_percentage_1h_in_currency'
      || key === 'price_change_percentage_24h_in_currency'
      || key === 'price_change_percentage_7d_in_currency'
      || key === 'total_volume'
      || key === 'market_cap';
  });
  const listTitle = updateKey.map((key, index) => <li key={index}>{key}</li>);
  return (
    <>
      {listTitle}
    </>
  );
};

export default RowTitle;
