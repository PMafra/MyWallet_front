import styled from 'styled-components';

const StyledPageContainer = styled.div`
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#000000' : '#925ABE')};
    padding: 25px 25px 16px 25px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default StyledPageContainer;
