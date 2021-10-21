import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import RecordsContext from "./store/RecordsContext";
import TransitionStyle from "./components/TransitionStyle";

export default function App () {

  const [isAddRecord, setIsAddRecord] = useState(true);
  const [records, setRecords] = useState([]);

  return (
    <RecordsContext.Provider value={{isAddRecord, setIsAddRecord, records, setRecords}}>
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </RecordsContext.Provider>
  )
}