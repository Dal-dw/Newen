import React from "react";
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig";
import Contenedor from "./Components/Contenedor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
