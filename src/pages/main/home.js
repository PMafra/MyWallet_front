import StyledPageContainer from "../../components/StyledPageContainer";
import styled from "styled-components";
import {StyledHeader} from "../../components/StyledHeader";
import {IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import Records from "../../components/Records";
import { Link, useHistory } from "react-router-dom";
import RecordsContext from "../../store/RecordsContext";
import ColorModeContext from "../../store/ColorModeContext";
import { useContext, useState } from "react";
import UserContext from "../../store/UserContext";
import { signOut } from "../../services/api";

export default function Home () {

    const { setIsAddRecord } = useContext(RecordsContext);
    const { isDarkMode, setIsDarkMode } = useContext(ColorModeContext);
    const history = useHistory();
    const { userName, token } = useContext(UserContext);
    const [isLogOut, setIsLogOut] = useState(false);
    const [logOutMessage, setLogOutMessage] = useState("SAIR");

    const signOutRequest = () => {
        signOut(token).then((res) => {
            history.push("/");
        }).catch(err => {
            setLogOutMessage("Você já foi deslogado ou a sua sessão expirou. Sairá da página em 5 segundos.");
            setTimeout(() => history.push("/"), 5000);
        });
    }

    return (
        <StyledPageContainer isDarkMode={isDarkMode}>
            <StyledHeaderBox>
                <StyledHeader userName={userName.length}>Olá, {userName}</StyledHeader>
                <StyledSwitchModeButton onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
                    {isDarkMode ? "Light" : "Dark"}
                </StyledSwitchModeButton>
                <StyledLogOutIcon onClick={() => setIsLogOut(!isLogOut)}/>
            </StyledHeaderBox>
            {isLogOut ? (
                <StyledLogOutConfirmation onClick={() => signOutRequest()} isDarkMode={isDarkMode}>
                    {logOutMessage}
                </StyledLogOutConfirmation>
            ) : ("")}
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
    cursor: pointer;
    :hover, :active{
        transform: translate(3px, -3px);
    }
`
const StyledLogOutIcon = styled(IoLogOutOutline)`
    font-size: 32px;
    color: #ffffff;
    cursor: pointer;
    :hover, :active{
        transform: translate(3px, -3px);
    }
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
    cursor: pointer;
    
    :hover, :active{
        transform: translate(3px, -3px);
    }

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
const StyledLogOutConfirmation = styled.div`
    position: fixed;
    background-color: #A966D6;
    top: calc(50vh - 100px);
    min-height: 80px;
    min-width: 80px;
    z-index: 5;
    border-radius: 50%;
    border: 2px solid #ffffff;
    box-shadow: ${({isDarkMode}) => isDarkMode ? "0 0 0 10px hsl(0, 0%, 30%), 0 0 0 15px hsl(0, 0%, 20%)" : "0 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%)"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    :hover, :active{
        transform: translate(3px, -3px);
    }
`