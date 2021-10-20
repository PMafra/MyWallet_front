import styled from "styled-components";

export default function Records () {
    return (
        <StyledRecordsContainer>
            {false ? (
                <StyledNoRecords>
                    <p>
                        Não há registros de entrada ou saída
                    </p>
                </StyledNoRecords>
            ) : ("")}
            <StyledRecordsList>
                <StyledRecord></StyledRecord>
            </StyledRecordsList>
            <StyledBalanceBox></StyledBalanceBox>
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
    padding: 23px 12px 10px 15px;
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
    gap: 23px;
`
const StyledRecord = styled.li`
    display: flex;
    flex-direction: row;
`
const StyledBalanceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`