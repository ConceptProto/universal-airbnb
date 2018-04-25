'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _H = require('./H4');

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnwamba/Projects/Books/Practical MERN with Next/mern-demo-v0/universal-airbnb/components/Card.js';
var Card = exports.Card = function Card(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-1025365294',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1025365294' + ' ' + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('img', { src: props.imgUrl, alt: props.title, className: 'jsx-1025365294',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('p', {
    className: 'jsx-1025365294' + ' ' + 'caption',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.caption), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title), _react2.default.createElement('p', {
    className: 'jsx-1025365294' + ' ' + 'price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, '$', props.price, ' per person')), _react2.default.createElement(_style2.default, {
    styleId: '1025365294',
    css: 'img.jsx-1025365294{max-width:100%;height:auto;}p.caption.jsx-1025365294{text-transform:uppercase;font-size:11px;font-weight:600;}p.price.jsx-1025365294{font-size:14px;font-weight:200;}p.jsx-1025365294{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHd0IsQUFJVSxBQUtWLEFBSU4sU0FDWCxNQWJjLEFBU0ksVUFMRCxFQUhqQixJQVNBLFNBTGtCLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzbndhbWJhL1Byb2plY3RzL0Jvb2tzL1ByYWN0aWNhbCBNRVJOIHdpdGggTmV4dC9tZXJuLWRlbW8tdjAvdW5pdmVyc2FsLWFpcmJuYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSDQgZnJvbSAnLi9INCc7XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ1VybH0gYWx0PXtwcm9wcy50aXRsZX0vPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntwcm9wcy5jYXB0aW9ufTwvcD5cbiAgICAgIDxIND57cHJvcHMudGl0bGV9PC9IND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcm9wcy5wcmljZX0gcGVyIHBlcnNvbjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIHAuY2FwdGlvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIHAucHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdfQ== */\n/*@ sourceURL=components/Card.js */'
  }));
};

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkg0IiwiQ2FyZCIsInByb3BzIiwiaW1nVXJsIiwidGl0bGUiLCJjYXB0aW9uIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBUSxBQUVmOzs7Ozs7O0FBQU8sSUFBTSxzQkFBTyxTQUFQLEFBQU8sWUFBQTt5QkFDbEIsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsNENBQ08sS0FBSyxNQUFWLEFBQWdCLFFBQVEsS0FBSyxNQUE3QixBQUFtQyxrQkFBbkM7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUEsQUFBd0I7QUFBeEI7QUFBQSxXQUZGLEFBRUUsQUFBOEIsQUFDOUIsMEJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FIRixBQUdFLEFBQVcsQUFDWCx3QkFBQSxjQUFBO3dDQUFBLEFBQWE7O2dCQUFiO2tCQUFBO0FBQUE7QUFBQSxLQUF1QixXQUF2QixBQUE2QixPQUxqQyxBQUNFLEFBSUU7YUFMSjtTQURrQixBQUNsQjtBQUFBO0FBREssQUE2QlA7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXNud2FtYmEvUHJvamVjdHMvQm9va3MvUHJhY3RpY2FsIE1FUk4gd2l0aCBOZXh0L21lcm4tZGVtby12MC91bml2ZXJzYWwtYWlyYm5iIn0=