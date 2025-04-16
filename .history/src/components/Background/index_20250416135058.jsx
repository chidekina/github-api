import styled from "styled-components";

const MainStyled = styled.main`
    background-color: #1F1F1F;
`

const background = ({ children }) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
      );
}
 
export default background;