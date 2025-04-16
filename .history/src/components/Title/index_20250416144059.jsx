import styled from 'styled-components';
import git-mark from '../../assets/github-mark-white.svg';
import git-logo from "../../assets/GitHub_Logo_White.png";

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
            <img src={git-mark} alt='logo do Github versão branca' className='git-mark'/>
            <TitleStyled>Perfil</TitleStyled>
            <img src={git-logo} alt='Github de forma escrita com cor branca' className='Git'/>
        </TitleContainer>
      );
}
 
export default Title;