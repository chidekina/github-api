import styled from 'styled-components';
import gitLogo from '../../assets/github-mark-white.svg';
import gitHub from "../../assets/GitHub_Logo_White.png";

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
    gap: 0.5rem;

    & img {
    width: 5%;
    object-fit: contain;
    height: fit-content;
}
`

const TitleStyled = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: 600;
`

const Title = () => {
    return (
        <TitleContainer>
            <img src={gitLogo} alt='logo do Github versão branca' className='gitLogo'/>
            <TitleStyled>Perfil</TitleStyled>
            <img src={gitHub} alt='Github de forma escrita com cor branca' className='Git'/>
        </TitleContainer>
      );
}
 
export default Title;