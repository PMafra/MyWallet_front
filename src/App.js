import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import RecordsContext from "./store/RecordsContext";
import ColorModeContext from "./store/ColorModeContext";
import TransitionStyle from "./components/TransitionStyle";

export default function App () {

  const [isAddRecord, setIsAddRecord] = useState(true);
  const [records, setRecords] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <RecordsContext.Provider value={{isAddRecord, setIsAddRecord, records, setRecords}}>
    <ColorModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </ColorModeContext.Provider>
    </RecordsContext.Provider>
  )
}