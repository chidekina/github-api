import styled from "styled-components";
import elipse from "../../assets/Ellipse.svg";
import layer from "../../assets/Layer.svg";

const BodyStyled = styled.body`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #272727;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    z-index: 0;
`

const Elipse1 =styled.img`
    position: absolute;
    left: 45rem;
    bottom: 12rem;
    z-index: -1;
`

const Elipse2 = styled.img`
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    rotate: 180deg;
    z-index: -1;
`
const Layer = styled.img`
    position: absolute;
    left: 8rem;
    bottom: 25rem;
    rotate: 180deg;
    z-index: -1;
`

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    height: 30rem;
    width: 60rem;
    z-index: 10;
    justify-content: center;
`

const Background = ({ children }) => {
    return (
        <BodyStyled>
            <Elipse1 src={elipse} alt="elipe azul escuro borrado" />
            <Elipse2 src={elipse} alt="elipe azul escuro borrado" />
            <Layer src={layer} alt="imagem de uma camada" />
            <MainStyled>
            {children}
            </MainStyled>
        </BodyStyled>
      );
}
 
export default Background;