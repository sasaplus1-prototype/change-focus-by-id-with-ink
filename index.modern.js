import * as readline from 'node:readline';
import React from 'react';
import { render, useFocusManager, useInput, Box, Text, useFocus } from 'ink';

readline.emitKeypressEvents(process.stdin);
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
  } = useFocus({
    id
  });
  return /*#__PURE__*/React.createElement(Text, {
    inverse: isFocused
  }, label);
}
function App() {
  const {
    focus
  } = useFocusManager();
  useInput(input => {
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
  return /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "Press 1, 2 or 3 to focus an item. Press Tab to focus next item. Press q to exit."), /*#__PURE__*/React.createElement(Item, {
    id: "item-1",
    label: "Item 1"
  }), /*#__PURE__*/React.createElement(Item, {
    id: "item-2",
    label: "Item 2"
  }), /*#__PURE__*/React.createElement(Item, {
    id: "item-3",
    label: "Item 3"
  }));
}
render( /*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=index.modern.js.map
