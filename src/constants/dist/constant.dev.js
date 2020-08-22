"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MKT_CAP = exports.VOLUME = exports.PERCENT_7D = exports.PERCENT_24H = exports.PERCENT_1H = exports.PRICE = exports.SYMBOL = exports.IMAGE = exports.MARKET_RANK = exports.URL_MARKET = exports.BASE_URL = void 0;
var BASE_URL = 'https://api.coingecko.com/api/v3';
exports.BASE_URL = BASE_URL;
var URL_MARKET = 'https://api.coingecko.com/api/v3/coins/markets'; // key of table

exports.URL_MARKET = URL_MARKET;
var MARKET_RANK = 'market_cap_rank';
exports.MARKET_RANK = MARKET_RANK;
var IMAGE = 'image';
exports.IMAGE = IMAGE;
var SYMBOL = 'symbol';
exports.SYMBOL = SYMBOL;
var PRICE = 'current_price';
exports.PRICE = PRICE;
var PERCENT_1H = 'price_change_percentage_1h_in_currency';
exports.PERCENT_1H = PERCENT_1H;
var PERCENT_24H = 'price_change_percentage_24h_in_currency';
exports.PERCENT_24H = PERCENT_24H;
var PERCENT_7D = 'price_change_percentage_7d_in_currency';
exports.PERCENT_7D = PERCENT_7D;
var VOLUME = 'total_volume';
exports.VOLUME = VOLUME;
var MKT_CAP = 'market_cap';
exports.MKT_CAP = MKT_CAP;