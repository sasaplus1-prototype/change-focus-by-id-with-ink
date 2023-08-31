import * as readline from 'node:readline';
import React, { useState, useEffect } from 'react';
import { Box, render, Text, useFocus, useFocusManager, useInput } from 'ink';

readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', function (str, key) {
  if (key && key.name === 'q') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);

function Item(props) {
  const { id, label } = props;
  const { isFocused } = useFocus({ id });

  return (
    <Text inverse={isFocused}>{label}</Text>
  );
}

function App() {
  const { focus } = useFocusManager();

  useInput((input) => {
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

  return (
    <Box width="100%" height="100%" flexDirection="column">
      <Text>Press 1, 2 or 3 to focus an item. Press Tab to focus next item. Press q to exit.</Text>
      <Item id="item-1" label="Item 1" />
      <Item id="item-2" label="Item 2" />
      <Item id="item-3" label="Item 3" />
    </Box>
  );
}

render(<App />);
