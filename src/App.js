import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import RecordsContext from "./store/RecordsContext";
import ColorModeContext from "./store/ColorModeContext";
import UserContext from "./store/UserContext";
import TransitionStyle from "./components/TransitionStyle";

export default function App () {

  const [isAddRecord, setIsAddRecord] = useState(true);
  const [records, setRecords] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <RecordsContext.Provider value={{isAddRecord, setIsAddRecord, records, setRecords}}>
    <ColorModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
    <UserContext.Provider value={{token, setToken, userName, setUserName}}>
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </UserContext.Provider>
    </ColorModeContext.Provider>
    </RecordsContext.Provider>
  )
}