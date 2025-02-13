import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Portfolio from "./components/Portfolio";

export function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
