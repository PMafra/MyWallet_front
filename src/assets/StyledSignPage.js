import styled from 'styled-components';

const StyledSignPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;
const StyledLogo = styled.h1`
    font-family: 'Bilbo', cursive;
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
`;
const StyledLogSwap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .swapLink {
        padding: 10px;
        text-decoration: none;
        color: #ffffff;
        font-weight: 700;
        font-size: 15px;
    }
`;
export {
  StyledSignPage,
  StyledLogo,
  StyledLogSwap,
};
