import React from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar } from "components/Navbar";
import AssetsPage from "pages/assets";
import TransactionsPage from "pages/transactions";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
