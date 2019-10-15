import React from 'react';
import { ThemeProvider } from '../context';
import Greeting from '../Greeting';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

function App() {
  return (
    <ThemeProvider value={themes}>
      <h1>Hello World!</h1>
      <Greeting />
    </ThemeProvider>
  );
}

export default App;
