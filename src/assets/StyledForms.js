import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-bottom: 36px;
`
const StyledInput = styled.input`
    height: 58px;
    width: 326px;
    background-color: ${({isDarkMode}) => isDarkMode ? "#000000" : "#ffffff"};
    border: ${({isDarkMode}) => isDarkMode ? "1px solid #ffffff" : "none"};
    border-radius: 5px;
    padding: 0px 15px;
    font-size: 20px;
    color: ${({isDarkMode}) => isDarkMode ? "#ffffff" : "#000000"};
    outline: none;

    :not(:placeholder-shown):invalid {
        border: 2px solid red;
    }
`
const StyledAlertBox = styled.span`
    color: #ffffff;
    font-size: 15px;
    width: 326px;
    text-align: left;
    word-break: break-all;
    line-height: 20px;
`
const StyledButton = styled.button`
    height: 46px;
    width: 326px;
    background-color: #A966D6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.5px;
    border-radius: 5px;
    border: none;
    opacity: ${({ loading }) => loading ? 0.6 : 1};
    cursor: pointer;
    :hover, :active{
        transform: translate(3px, -3px);
    }
`
export {
    StyledForm,
    StyledInput,
    StyledAlertBox,
    StyledButton,
}