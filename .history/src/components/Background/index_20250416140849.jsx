import styled from "styled-components";
import elipse from "../../assets/Ellipse.svg";
import layer from "../../assets/Layer.svg";

const MainStyled = styled.body`
    background-color: #272727;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
`

const Elipse1 =styled.img`
    position: absolute;
    left: 45rem;
    bottom: 12rem;
    z-index: 0;
`

const Elipse2 = styled.img`
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    rotate: 180deg;
    z-index: 0;
`
const Layer = styled.img`
    position: absolute;
    left: 10rem;
    bottom: 25rem;
    rotate: 180deg;
    z-index: 0;
`

const Background = ({ children }) => {
    return (
        <BodyStyled>
            <Elipse1 src={elipse} alt="elipe azul escuro borrado" />
            <Elipse2 src={elipse} alt="elipe azul escuro borrado" />
            <Layer src={layer} alt="imagem de uma camada" />
            {children}
        </BodyStyled>
      );
}
 
export default Background;