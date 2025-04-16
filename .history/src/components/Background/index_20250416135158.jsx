import styled from "styled-components";

const MainStyled = styled.main`
    background-color: #1F1F1F;
`

const Background = ({ children }) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
      );
}
 
export default background;