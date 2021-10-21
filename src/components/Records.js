import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import NewRecordContext from "../store/NewRecordContext";

export default function Records () {

    const [totalBalance, setTotalBalance] = useState("0,00"); 

    const { records } = useContext(NewRecordContext);

    return (
        <StyledRecordsContainer>
            <StyledRecordsList>

                {records.length !== 0 ? (
                    records.map(record => 
                        
                    <StyledRecord>
                        <div className="group-date-description">
                            <time className="fontClass">{record.date}</time>
                            <p className="fontClass">{record.description}</p>
                        </div>
                        <span className="fontClass">{record.value}</span>
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

            <StyledBalanceBox>
                <h3>SALDO</h3>
                <span>{totalBalance}</span>
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
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0 12px 0 15px;
    position: relative;
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
        color: #000000;
        word-break: break-all;
    }

    span {
        color: #69CB60;
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
    box-shadow: 0 -6px 5px -5px #d8d8d8;
    
    h3 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    span {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #03AC00;
    }
`