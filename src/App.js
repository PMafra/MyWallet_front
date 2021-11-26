/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import RecordsContext from './store/RecordsContext';
import ColorModeContext from './store/ColorModeContext';
import UserContext from './store/UserContext';
import TransitionStyle from './assets/styles/TransitionStyle';
import InputContext from './store/InputContext';

export default function App() {
  const [isAddRecord, setIsAddRecord] = useState(true);
  const [records, setRecords] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <RecordsContext.Provider value={{
      isAddRecord, setIsAddRecord, records, setRecords,
    }}
    >
      <ColorModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <UserContext.Provider value={{
          token, setToken, userName, setUserName,
        }}
        >
          <InputContext.Provider value={{ alertMessage, setAlertMessage }}>
            <Router>
              <GlobalStyle />
              <TransitionStyle />
              <AppRoutes />
            </Router>
          </InputContext.Provider>
        </UserContext.Provider>
      </ColorModeContext.Provider>
    </RecordsContext.Provider>
  );
}
