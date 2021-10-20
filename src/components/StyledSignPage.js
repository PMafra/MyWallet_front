import styled from "styled-components";

const StyledSignPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`
const StyledLogo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-bottom: 36px;
`
const StyledInput = styled.input`
    height: 58px;
    width: 326px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 0px 15px;
    font-size: 20px;
    color: #000000;
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
`
const StyledLogSwap = styled.div`
    height: 18px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
`
export {
    StyledSignPage, 
    StyledLogo, 
    StyledForm, 
    StyledInput, 
    StyledButton, 
    StyledLogSwap
}