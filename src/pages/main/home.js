import StyledPageContainer from "../../components/StyledPageContainer";
import styled from "styled-components";
import {StyledHeader} from "../../components/StyledHeader";
import {IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import Records from "../../components/Records";
import { Link } from "react-router-dom";
import RecordsContext from "../../store/RecordsContext";
import { useContext } from "react";

export default function Home () {

    const { setIsAddRecord } = useContext(RecordsContext);

    return (
        <StyledPageContainer>
            <StyledHeaderBox>
                <StyledHeader>Olá, Fulano</StyledHeader>
                <StyledLogOutIcon></StyledLogOutIcon>
            </StyledHeaderBox>
            <Records />
            <StyledButtonsBox>
                <StyledNewRecordButton>
                    <Link className="buttonLink" to="/new-record" onClick={() => setIsAddRecord(true)}>
                        <StyledAddIcon />
                        <p>Nova entrada</p>
                    </Link>
                </StyledNewRecordButton>
                <StyledNewRecordButton>
                    <Link className="buttonLink" to="/new-record" onClick={() => setIsAddRecord(false)}>
                        <StyledRemoveIcon />
                        <p>Nova saída</p>
                    </Link>
                </StyledNewRecordButton>
            </StyledButtonsBox>
        </StyledPageContainer>
    )
}

const StyledHeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 326px;
`
const StyledLogOutIcon = styled(IoLogOutOutline)`
    font-size: 32px;
    color: #ffffff;
`
const StyledButtonsBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 100%;
    max-width: 326px;
`
const StyledNewRecordButton = styled.button`
    background-color: #A966D6;
    width: 100%;
    height: 114px;
    border: none;
    border-radius: 5px;
    padding: 10px;

    .buttonLink {
        height: 100%;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p {
        width: 64px;
        font-size: 17px;
        color: #ffffff;
        line-height: 20px;
        text-align: left;
        font-weight: 700;
    }
`
const StyledAddIcon = styled(IoAddCircleOutline)`
    font-size: 30px;
    color: #ffffff;
`
const StyledRemoveIcon = styled(IoRemoveCircleOutline)`
    font-size: 30px;
    color: #ffffff;
`