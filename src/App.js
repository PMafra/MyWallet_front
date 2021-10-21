import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import Records from "./components/Records";
import NewRecordContext from "./store/NewRecordContext";

export default function App () {

  const [newRecord, setNewRecord] = useState(true);
  const [records, setRecords] = useState([]);

  return (
    <NewRecordContext.Provider value={{newRecord, setNewRecord, records, setRecords}}>
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </NewRecordContext.Provider>
  )

}