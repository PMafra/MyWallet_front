import styled from "styled-components";

const StyledHeader = styled.h1`
    font-weight: 700;
    font-size: ${({ userName }) => userName > 9 ? "18px" : "25px"};
    color: #ffffff;
    line-height: 30.5px;
    max-width: 200px;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export {
    StyledHeader
}