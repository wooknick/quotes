import React from "react";
import MainRoutes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GloablStyles from "../Styles/GlobalStyles";
import Header from "./Header";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GloablStyles />
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
