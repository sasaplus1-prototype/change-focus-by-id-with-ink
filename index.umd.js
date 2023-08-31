(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('node:readline'), require('react'), require('ink')) :
  typeof define === 'function' && define.amd ? define(['node:readline', 'react', 'ink'], factory) :
  (global = global || self, factory(global.readline, global.react, global.ink));
})(this, (function (readline, React, ink) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return n;
  }

  var readline__namespace = /*#__PURE__*/_interopNamespace(readline);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  readline__namespace.emitKeypressEvents(process.stdin);
  process.stdin.on('keypress', function (str, key) {
    if (key && key.name === 'q') {
      process.stdin.pause();
    }
  });
  process.stdin.setRawMode(true);
  function Item(props) {
    const {
      id,
      label
    } = props;
    const {
      isFocused
    } = ink.useFocus({
      id
    });
    return /*#__PURE__*/React__default["default"].createElement(ink.Text, {
      inverse: isFocused
    }, label);
  }
  function App() {
    const {
      focus
    } = ink.useFocusManager();
    ink.useInput(input => {
      switch (input) {
        case '1':
          focus('item-1');
          break;
        case '2':
          focus('item-2');
          break;
        case '3':
          focus('item-3');
          break;
      }
    });
    return /*#__PURE__*/React__default["default"].createElement(ink.Box, {
      width: "100%",
      height: "100%",
      flexDirection: "column"
    }, /*#__PURE__*/React__default["default"].createElement(ink.Text, null, "Press 1, 2 or 3 to focus an item. Press Tab to focus next item. Press q to exit."), /*#__PURE__*/React__default["default"].createElement(Item, {
      id: "item-1",
      label: "Item 1"
    }), /*#__PURE__*/React__default["default"].createElement(Item, {
      id: "item-2",
      label: "Item 2"
    }), /*#__PURE__*/React__default["default"].createElement(Item, {
      id: "item-3",
      label: "Item 3"
    }));
  }
  ink.render( /*#__PURE__*/React__default["default"].createElement(App, null));

}));
//# sourceMappingURL=index.umd.js.map
