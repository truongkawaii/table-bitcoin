// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import * as KEY from '../../../constants/constant';
const RowItem = (props) => {
  const { item } = props;

  // let percent_1h = item[KEY.PERCENT_1H].toFixed(2);
  // let percent_24h = item[KEY.PERCENT_24H].toFixed(2);
  // let percent_7d = item[KEY.PERCENT_7D].toFixed(2);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  const arrItem = (
    <>
      <td className="item star"><span><i className="far fa-star"></i></span></td>
      <td className="item">{item[KEY.MARKET_RANK]}</td>
      <td className="item logo"><img src={item[KEY.IMAGE]} /> <h3>{item['name']}</h3> </td>
      <td className="item upcase">{item[KEY.SYMBOL]} </td>
      <td className="item">{formatter.format(item[KEY.PRICE])}</td>
      {/* {item[KEY.PERCENT_1H] >= 0 ?
        <td className="item green-num">{percent_1h}%</td>
        :
        <td className="item red-num">{percent_1h}%</td>
      }
      {item[KEY.PERCENT_24H] >= 0 ?
        <td className="item green-num">{percent_24h}%</td>
        :
        <td className="item red-num">{percent_24h}%</td>
      }
      {item[KEY.PERCENT_7D] >= 0 ?
        <td className="item green-num">{percent_7d}%</td>
        :
        <td className="item red-num">{percent_7d}%</td>
      } */}
      <td className="item">{formatter.format(item[KEY.VOLUME])}</td>
      <td className="item">{formatter.format(item[KEY.MKT_CAP])}</td>
    </>
  );
  return (
    <tbody>
      <tr className="list-row-item">
        {arrItem}
      </tr>
    </tbody>
  );
};

export default RowItem;
