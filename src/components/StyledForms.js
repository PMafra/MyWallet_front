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
export {
    StyledForm,
    StyledInput,
    StyledButton
}