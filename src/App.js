import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import RecordsContext from "./store/RecordsContext";

export default function App () {

  const [isAddRecord, setIsAddRecord] = useState(true);
  const [records, setRecords] = useState([]);

  return (
    <RecordsContext.Provider value={{isAddRecord, setIsAddRecord, records, setRecords}}>
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </RecordsContext.Provider>
  )
}