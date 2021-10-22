import React from "react";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import RecordsContext from "../store/RecordsContext";
import ColorModeContext from "../store/ColorModeContext";

export default function Records () {

    const [totalBalance, setTotalBalance] = useState(0); 
    const { records } = useContext(RecordsContext);
    const { isDarkMode } = useContext(ColorModeContext);

    useEffect(() => {

        let sumOfRecordsValues = 0;
        records.forEach(record => {
            if (record.isAddRecord) {
                sumOfRecordsValues += record.value;
            } else {
                sumOfRecordsValues -= record.value;
            }
        })
        setTotalBalance(sumOfRecordsValues);

    }, [])

    return (
        <StyledRecordsContainer isDarkMode={isDarkMode}>
            <StyledRecordsList>
                {records.length !== 0 ? (
                    records.map(({date, description, value, isAddRecord}, i) => 
                        <StyledRecord key={i} isAddRecord={isAddRecord} isDarkMode={isDarkMode}>
                            <div className="group-date-description">
                                <time className="fontClass">{date}</time>
                                <p className="fontClass">{description}</p>
                            </div>
                            <span className="fontClass">
                                {value % 1 === 0 ? (
                                    `${value}.00`
                                ) : (
                                    value.toFixed(2)
                                )}
                            </span>
                        </StyledRecord>   
                    )
                ) : (
                    <StyledNoRecords>
                        <p>
                            Não há registros de entrada ou saída
                        </p>
                    </StyledNoRecords>
                )}
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
    )
}

const StyledRecordsContainer = styled.div`
    margin-top: 22px;
    margin-bottom: 13px;
    width: 100%;
    max-width: 326px;
    height: 100vh;
    background-color: ${({isDarkMode}) => isDarkMode ? "#000000" : "#ffffff"};
    border-radius: 5px;
    padding: 0 12px 0 15px;
    position: relative;
    border: ${({isDarkMode}) => isDarkMode ? "1px solid #ffffff" : "none"};
`
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
`
const StyledRecordsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 263px);
    overflow-y: scroll;
    padding: 15px 0px;

    ::-webkit-scrollbar {
        display: none;
    }
`
const StyledRecord = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .group-date-description {
        display: flex;
        flex-direction: row;
    }

    .fontClass {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }

    time {
        color: #D4D4D4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    p {
        color: ${({isDarkMode}) => isDarkMode ? "#ffffff" : "#000000"};
        word-break: break-all;
    }

    span {
        color: ${({ isAddRecord }) => isAddRecord ? "#69CB60": "#C70000"};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }

`
const StyledBalanceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 27px);
    position: absolute;
    bottom: 10px;
    border-top: 1px solid #e8e8e8;
    padding-top: 8px;
    box-shadow: ${({isDarkMode}) => isDarkMode ? "none" : "0 -6px 5px -5px #d8d8d8"};
    
    h3 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: ${({isDarkMode}) => isDarkMode ? "#ffffff" : "#000000"};
    }
    span {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${({ totalBalance }) => (totalBalance > 0) ? ("#03AC00") : (totalBalance === 0 ? ("#000000") : ("#C70000")) };
    }
`