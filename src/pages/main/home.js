import StyledPageContainer from "../../components/StyledPageContainer";
import styled from "styled-components";
import {StyledHeader} from "../../components/StyledHeader";
import {IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import Records from "../../components/Records";
import { Link, useHistory } from "react-router-dom";
import RecordsContext from "../../store/RecordsContext";
import ColorModeContext from "../../store/ColorModeContext";
import { useContext } from "react";
import UserContext from "../../store/UserContext";
import { signOut } from "../../services/api";

export default function Home () {

    const { setIsAddRecord } = useContext(RecordsContext);
    const { isDarkMode, setIsDarkMode } = useContext(ColorModeContext);
    const history = useHistory();
    const { userName, token } = useContext(UserContext);

    const signOutRequest = () => {
        signOut(token).then((res) => {
            history.push("/");
        }).catch(err => {
            console.log(err.response.data);
        });
    }

    return (
        <StyledPageContainer isDarkMode={isDarkMode}>
            <StyledHeaderBox>
                <StyledHeader userName={userName.length}>Olá, {userName}</StyledHeader>
                <StyledSwitchModeButton onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
                    {isDarkMode ? "Light" : "Dark"}
                </StyledSwitchModeButton>
                <StyledLogOutIcon onClick={() => signOutRequest()}/>
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
const StyledSwitchModeButton = styled.button`
    background-color: ${({isDarkMode}) => isDarkMode ? "#A966D6" : "#000000"};
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    box-shadow: ${({isDarkMode}) => isDarkMode ? "0 12px 16px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(255,255,255,0.19)" : "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"};
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