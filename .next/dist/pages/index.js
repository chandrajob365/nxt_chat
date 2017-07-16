'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _isomorphicFetch = require('isomorphic-fetch');

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