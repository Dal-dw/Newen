import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <ThemeProvider>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
