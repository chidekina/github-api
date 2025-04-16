import styled from "styled-components";
import elipse from "../../assets/Ellipse.svg"

const MainStyled = styled.main`
    background-color: #1F1F1F;
`

const Elipse1 =styled.img`
    position
`

const Background = ({ children }) => {
    return (
        <MainStyled>
            <img src={elipse} alt="elipe azul escuro borrado"/>
            {children}
        </MainStyled>
      );
}
 
export default Background;