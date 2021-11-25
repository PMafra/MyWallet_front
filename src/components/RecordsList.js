/* eslint-disable no-nested-ternary */
import {
  useState, useContext, useEffect, useRef,
} from 'react';
import styled from 'styled-components';
import RecordsContext from '../store/RecordsContext';
import ColorModeContext from '../store/ColorModeContext';
import { getUserRecords } from '../services/Api';
import UserContext from '../store/UserContext';
import Record from './Record';

export default function Records() {
  const [totalBalance, setTotalBalance] = useState(0);
  const { setRecords, records } = useContext(RecordsContext);
  const { isDarkMode } = useContext(ColorModeContext);
  const { token } = useContext(UserContext);
  const recordsEndRef = useRef(null);
  const noRecordsMessage = 'Não há registros de entrada ou saída';
  const [recordsMessage, setRecordsMessage] = useState(noRecordsMessage);

  const scrollToBottom = () => {
    recordsEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const renderizeUserRecords = () => {
    getUserRecords(token).then((res) => {
      setRecords(res.data);
    }).catch((err) => {
      setRecordsMessage(err.response?.data);
    });
  };

  const sumAllRecords = () => {
    let sumOfRecordsValues = 0;
    records.forEach(({ isAddRecord, value }) => {
      if (isAddRecord) {
        sumOfRecordsValues += value;
      } else {
        sumOfRecordsValues -= value;
      }
    });
    setTotalBalance(sumOfRecordsValues);
  };

  useEffect(() => {
    renderizeUserRecords();
  }, []);

  useEffect(() => {
    sumAllRecords();
    setTimeout(() => scrollToBottom(), 1000);
  }, [records]);

  return (
    <StyledRecordsContainer isDarkMode={isDarkMode}>
      <StyledRecordsList>
        {records.length !== 0 ? (
          records.map((record) => <Record record={record} />)
        ) : (
          <StyledNoRecords>
            <p>
              {recordsMessage}
            </p>
          </StyledNoRecords>
        )}
        <div ref={recordsEndRef} />
      </StyledRecordsList>
      <StyledBalanceBox totalBalance={totalBalance} isDarkMode={isDarkMode}>
        <h3>SALDO</h3>
        <span>
          {totalBalance % 1 === 0 ? (
            `${totalBalance}.00`
          ) : (
            totalBalance.toFixed(2)
          )}
        </span>
      </StyledBalanceBox>
    </StyledRecordsContainer>
  );
}

const StyledRecordsContainer = styled.div`
    margin-top: 22px;
    margin-bottom: 13px;
    width: 100%;
    max-width: 326px;
    height: 100vh;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#ffffff')};
    border-radius: 5px;
    padding: 0 12px 0 15px;
    position: relative;
    border: ${({ isDarkMode }) => (isDarkMode ? '1px solid #ffffff' : 'none')};
`;
const StyledNoRecords = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    p {
        width: 180px;
        font-size: 20px;
        line-height: 23.5px;
        text-align: center;
        color: #A4A4A4;
    }
`;
const StyledRecordsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 244px);
    overflow-y: scroll;
    padding: 15px 0px;

    ::-webkit-scrollbar {
        display: none;
    }
`;
const StyledBalanceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 27px);
    position: absolute;
    bottom: 10px;
    border-top: 1px solid #e8e8e8;
    padding-top: 8px;
    box-shadow: ${({ isDarkMode }) => (isDarkMode ? 'none' : '0 -6px 5px -5px #d8d8d8')};
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#ffffff')};
    opacity: 0.9;
    
    h3 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    }
    span {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${({ totalBalance }) => ((totalBalance > 0) ? ('#03AC00') : (totalBalance === 0 ? ('#000000') : ('#C70000')))};
    }
`;
