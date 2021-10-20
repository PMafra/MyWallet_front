import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";

export default function App () {

  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  )

}