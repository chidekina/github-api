import styled from "styled-components";
import elipse from "../../assets/Ellipse.svg";
import layer from "../../assets/Layer.svg";

const BodyStyled = styled.div`
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
    right: 0;
    top: 0;
    z-index: -1;

    @media only screen and (max-width: 426px) {
        width: 14rem;
    }
`

const Elipse2 = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    rotate: 180deg;
    z-index: -1;

    @media only screen and (max-width: 426px) {
        width: 14rem;
    }
`
const Layer = styled.img`
    position: absolute;
    left: 8rem;
    top: 0rem;
    z-index: -1;

    @media only screen and (max-width: 426px) {
        
    }
`

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    height: 35rem;
    width: 60rem;
    z-index: 10;
    align-items: center;

    @media only screen and (max-width: 426px) {
        width: 20rem;
        height: 32rem;
    }
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