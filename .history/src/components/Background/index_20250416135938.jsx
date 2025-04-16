import styled from "styled-components";
import elipse from "../../assets/Ellipse.svg"

const MainStyled = styled.main`
    background-color: #272727;
`

const Elipse1 =styled.img`
    position: relative;
    left: 45rem;
    bottom: 12rem;
`

const Background = ({ children }) => {
    return (
        <MainStyled>
            <Elipse1 src={elipse} alt="elipe azul escuro borrado"/>
            <Elipse2 src
            {children}
        </MainStyled>
      );
}
 
export default Background;