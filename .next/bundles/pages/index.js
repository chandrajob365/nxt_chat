
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _socket = __webpack_require__(579);

var _socket2 = _interopRequireDefault(_socket);

var _isomorphicFetch = __webpack_require__(576);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/manishchandra/Documents/GeekSkool/OpenSource/next_project/nxt_chat/pages/index.js?entry';

var socket = (0, _socket2.default)('localhost:3000');

var HomePage = function (_Component) {
  (0, _inherits3.default)(HomePage, _Component);

  function HomePage(props) {
    (0, _classCallCheck3.default)(this, HomePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this, props));

    _this._handleMessage = function () {
      socket.on('message', function (message) {
        console.log('Entry handleMessage message = ', message, ' socket = ', socket);
        _this.setState(function (state) {
          return { messages: state.messages.concat(message) };
        });
      });
    };

    _this._handleSubmit = function (event) {
      console.log('Entry handleSubmit ');
      event.preventDefault();
      console.log('this.refs.msgVal.value = ', _this.refs.msgVal.value);
      // create message object
      var message = {
        id: new Date().getTime(),
        value: _this.refs.msgVal.value
      };
      console.log('Entry handleSubmit before emit\'message\' message = ', message, ' socket = ', socket);
      // send object to WS server

      socket.emit('message', message);
      // add it to state and clean current input value
      _this.setState(function (state) {
        return {
          messages: state.messages.concat(message)
        };
      });
      // reset Form data
      _this.refs.msgForm.reset();
    };

    _this.state = {
      messages: _this.props.messages
    };
    _this._handleMessage = _this._handleMessage.bind(_this);
    _this._handleSubmit = _this._handleSubmit.bind(_this);

    return _this;
  }
  // fetch old messages data from the server


  (0, _createClass3.default)(HomePage, [{
    key: 'componentDidMount',

    // connect to WS server and listen event
    value: function componentDidMount() {
      this._handleMessage();
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      socket.off('message', this.handleMessage);
      socket.close();
    }

    // add messages from server to the state


    // send messages to server and add them to the state

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.state.messages.map(function (message) {
        return _react2.default.createElement('li', { key: message.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, message.value);
      })), _react2.default.createElement('form', { ref: 'msgForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('input', {
        ref: 'msgVal',
        type: 'text',
        placeholder: 'Hello world!',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('button', { onClick: this._handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Send'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var response, messages;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('http://localhost:3000/messages');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                messages = _context.sent;
                return _context.abrupt('return', { messages: messages });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(_react.Component);

exports.default = HomePage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/manishchandra/Documents/GeekSkool/OpenSource/next_project/nxt_chat/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/manishchandra/Documents/GeekSkool/OpenSource/next_project/nxt_chat/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[586]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2NkZWZhNGMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKT9jZGVmYTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmNvbnN0IHNvY2tldCA9IGlvKCdsb2NhbGhvc3Q6MzAwMCcpXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzXG4gICAgfVxuICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UgPSB0aGlzLl9oYW5kbGVNZXNzYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLl9oYW5kbGVTdWJtaXQgPSB0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuXG4gIH1cbiAgLy8gZmV0Y2ggb2xkIG1lc3NhZ2VzIGRhdGEgZnJvbSB0aGUgc2VydmVyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMnKVxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIHsgbWVzc2FnZXMgfVxuICB9XG5cbiAgLy8gY29ubmVjdCB0byBXUyBzZXJ2ZXIgYW5kIGxpc3RlbiBldmVudFxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faGFuZGxlTWVzc2FnZSgpXG4gIH1cblxuICAvLyBjbG9zZSBzb2NrZXQgY29ubmVjdGlvblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgc29ja2V0Lm9mZignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgICBzb2NrZXQuY2xvc2UoKVxuICB9XG5cbiAgLy8gYWRkIG1lc3NhZ2VzIGZyb20gc2VydmVyIHRvIHRoZSBzdGF0ZVxuX2hhbmRsZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgc29ja2V0Lm9uKCdtZXNzYWdlJywgbWVzc2FnZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRW50cnkgaGFuZGxlTWVzc2FnZSBtZXNzYWdlID0gJywgbWVzc2FnZSwgJyBzb2NrZXQgPSAnLCBzb2NrZXQpXG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcy5jb25jYXQobWVzc2FnZSkgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8vIHNlbmQgbWVzc2FnZXMgdG8gc2VydmVyIGFuZCBhZGQgdGhlbSB0byB0aGUgc3RhdGVcbiAgX2hhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZygnRW50cnkgaGFuZGxlU3VibWl0ICcpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLnJlZnMubXNnVmFsLnZhbHVlID0gJywgdGhpcy5yZWZzLm1zZ1ZhbC52YWx1ZSlcbiAgICAvLyBjcmVhdGUgbWVzc2FnZSBvYmplY3RcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgaWQ6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgICB2YWx1ZTogdGhpcy5yZWZzLm1zZ1ZhbC52YWx1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnRW50cnkgaGFuZGxlU3VibWl0IGJlZm9yZSBlbWl0XFwnbWVzc2FnZVxcJyBtZXNzYWdlID0gJywgbWVzc2FnZSAsICcgc29ja2V0ID0gJywgc29ja2V0KVxuICAgIC8vIHNlbmQgb2JqZWN0IHRvIFdTIHNlcnZlclxuXG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICAgIC8vIGFkZCBpdCB0byBzdGF0ZSBhbmQgY2xlYW4gY3VycmVudCBpbnB1dCB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcy5jb25jYXQobWVzc2FnZSlcbiAgICB9KSlcbiAgICAvLyByZXNldCBGb3JtIGRhdGFcbiAgICB0aGlzLnJlZnMubXNnRm9ybS5yZXNldCgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PlxuICAgICAgICAgICAgICA8bGkga2V5PXttZXNzYWdlLmlkfT57bWVzc2FnZS52YWx1ZX08L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxmb3JtIHJlZj0nbXNnRm9ybSc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPSdtc2dWYWwnXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdIZWxsbyB3b3JsZCEnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVTdWJtaXR9PlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB3cyAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDU4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWpDQTtBQUNBO0FBbUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBcERBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQU9BO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7QUFxQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFLQTs7Ozs7O0FBbkVBOzs7Ozs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0VBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        