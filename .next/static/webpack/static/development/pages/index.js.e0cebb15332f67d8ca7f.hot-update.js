webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cardGame/gameBoard.js":
/*!******************************************!*\
  !*** ./components/cardGame/gameBoard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _cardSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardSlot */ "./components/cardGame/cardSlot.js");
/* harmony import */ var _commandLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commandLine */ "./components/cardGame/commandLine.js");
/* harmony import */ var _redux_actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/api */ "./redux/actions/api.js");
var _jsxFileName = "/Users/davidplell/code/tempoSneakers/components/cardGame/gameBoard.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmargin:30px;\nwidth:380px;\nheight:330px;\nbackground:url(/static/img/timber.jpg/);\nbackground-size:cover;\nborder:1px solid #666;\nborder-radius:4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var GameBoard =
/*#__PURE__*/
function (_Component) {
  _inherits(GameBoard, _Component);

  function GameBoard() {
    var _this;

    _classCallCheck(this, GameBoard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameBoard).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "turnPoss", function (poss) {
      return 1 - poss;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "flipCard", function (ind, index, card) {
      var slots = _toConsumableArray(_this.state.slots); //flip possession between 1 and 


      slots[ind][index].card.poss = _this.turnPoss(card.poss);
      var row = ind;
      var column = index; //ripple

      slots.map(function (r, i) {
        r.map(function (c, ii) {
          if (!c.card) return;
          if (c.card.poss === card.poss) return; //check left and right

          if (i === row) {
            if (ii === column - 1) {
              if (card.l > c.card.r) slots[i][ii].card.poss = _this.turnPoss(c.card.poss);
            }

            if (ii === column + 1) {
              if (card.r > c.card.l) slots[i][ii].card.poss = _this.turnPoss(c.card.poss);
            }
          } //check top and bottom


          if (ii === column) {
            if (i === row - 1) {
              if (card.u > c.card.d) slots[i][ii].card.poss = _this.turnPoss(c.card.poss);
            }

            if (i === row + 1) {
              if (card.d > c.card.u) slots[i][ii].card.poss = _this.turnPoss(c.card.poss);
            }
          }
        });
      });

      _this.setState({
        slots: slots
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateBoard", function (slots, row, column, card) {
      slots.map(function (r, i) {
        r.map(function (c, ii) {
          if (!c.card) return;
          if (c.card.poss === card.poss) return; //check left and right

          if (i === row) {
            if (ii === column - 1) {
              if (card.l > c.card.r) _this.flipCard(i, ii, c.card);
            }

            if (ii === column + 1) {
              if (card.r > c.card.l) _this.flipCard(i, ii, c.card);
            }
          } //check top and bottom


          if (ii === column) {
            if (i === row - 1) {
              if (card.u > c.card.d) _this.flipCard(i, ii, c.card);
            }

            if (i === row + 1) {
              if (card.d > c.card.u) _this.flipCard(i, ii, c.card);
            }
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateSlots", function (row, column, card) {
      if (card) return;
      var slots = _this.state.slots;
      var _this$props = _this.props,
          controlCard = _this$props.controlCard,
          updateHand = _this$props.updateHand;
      if (!controlCard) return;

      _this.updateBoard(slots, row, column, controlCard);

      slots[row][column] = _objectSpread({}, slots[row][column], {
        card: _objectSpread({}, controlCard)
      });
      updateHand(controlCard);

      _this.setState({
        slots: slots
      }); // websocket


      Object(_redux_actions_api__WEBPACK_IMPORTED_MODULE_4__["pushGameboard"])(slots);
    });

    _this.state = {
      slots: null
    };
    return _this;
  }

  _createClass(GameBoard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      //subscribe to websocket events here
      Object(_redux_actions_api__WEBPACK_IMPORTED_MODULE_4__["updateGameboard"])(function (err, slots) {
        console.log(slots);

        _this2.setState({
          slots: slots
        });
      });
      var slots = [];

      for (var h = 0; h < 3; h++) {
        slots.push([]);

        for (var i = 0; i < 4; i++) {
          slots[h].push({
            row: h,
            column: i,
            card: null
          });
        }
      }

      this.setState({
        slots: slots
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          controlCard = _this$props2.controlCard,
          hoverCard = _this$props2.hoverCard,
          updateHand = _this$props2.updateHand,
          editControlCard = _this$props2.editControlCard;
      var slots = this.state.slots;
      var gameBoard = slots && slots.map(function (o, i) {
        return o.map(function (card, ind) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cardSlot__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: Math.random(0, 20000),
            row: card.row,
            updateSlots: _this3.updateSlots,
            controlCard: controlCard,
            column: card.column,
            card: card.card,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          });
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'nowrap'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Board, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, gameBoard), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commandLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
        editControlCard: editControlCard,
        controlCard: controlCard,
        hoverCard: hoverCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }));
    }
  }]);

  return GameBoard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var Board = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.e0cebb15332f67d8ca7f.hot-update.js.map