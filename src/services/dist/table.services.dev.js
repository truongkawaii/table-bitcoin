"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("./config.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableService =
/*#__PURE__*/
function () {
  function TableService() {
    _classCallCheck(this, TableService);
  }

  _createClass(TableService, null, [{
    key: "list",
    value: function list(query) {
      // return fetchData(query);
      var url = '/coins/markets';
      console.log(query, 'query');
      console.log(_config["default"].get(url, {
        params: query
      }), 'DĐ');
      return _config["default"].get(url, {
        params: query
      });
    }
  }]);

  return TableService;
}();

var _default = TableService;
exports["default"] = _default;