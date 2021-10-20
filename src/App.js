import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";
import NewRecordContext from "./store/NewRecordContext";

export default function App () {

  const [newRecord, setNewRecord] = useState(true);

  return (
    <NewRecordContext.Provider value={{newRecord, setNewRecord}}>
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </NewRecordContext.Provider>
  )

}