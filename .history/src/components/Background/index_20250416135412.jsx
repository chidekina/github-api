import styled from "styled-components";

const MainStyled = styled.main`
    background-color: #1F1F1F;
`

const Background = ({ children }) => {
    return (
        <MainStyled>
            <img src="../../assets/Ellipse 1.png" alt="elipe azul escuro borrado" />
            {children}
        </MainStyled>
      );
}
 
export default Background;