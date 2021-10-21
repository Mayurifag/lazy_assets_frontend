import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Typography, AppBar, Toolbar } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const Navbar: React.FunctionComponent = () => (
  <AppBar position="relative">
    <Toolbar>
      <AccountBalanceIcon />
      <Typography variant="h6">Lazy Assets</Typography>
    </Toolbar>
  </AppBar>
);
