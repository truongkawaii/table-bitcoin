"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var URLS = _interopRequireWildcard(require("../constants/constant"));

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// export async function fetchData(objQuery) {
// let query = await queryString.stringify(objQuery, {
//     sort: false,
//     encode: false
// }); 
// console.log(URLS.URL_MARKET + '?' + query, 'QUERY');
// const response = await axios.get(URL S.URL_MARKET + '?' + query);
// return await response.data;
// }
var axiosClient = _axios["default"].create({
  baseURL: URLS.BASE_URL,
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: function paramsSerializer(params) {
    return _queryString["default"].stringify(params);
  }
});

axiosClient.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, function (error) {
  throw error;
});
var _default = axiosClient;
exports["default"] = _default;