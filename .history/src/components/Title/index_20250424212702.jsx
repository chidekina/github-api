import styled from 'styled-components';
import gitMark from '../../assets/github-mark-white.svg';
import gitLogo from "../../assets/GitHub_Logo_White.png";

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    gap: 0.5rem;

    & .git-mark {
    width: 5%;
    object-fit: contain;
    height: fit-content;
}
    & .git-logo {
    width: 16%;
    object-fit: contain;
    height: fit-content;
    }

    @media only screen and (max-width: 480px) {
        
    .git-mark {
    width: 12%;
    object-fit: contain;
    height: fit-content;
}
    .git-logo {
    width: 36%;
    object-fit: contain;
    height: fit-content;
    }
    }

    @media only screen and (max-width: 768px) {
    .git-mark {
    width: 8%;
    object-fit: contain;
    height: fit-content;
}
    .git-logo {
    width: 12%;
    object-fit: contain;
    height: fit-content;
    }
    }
`

const TitleStyled = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: 600;

    @media only screen and (max-width: 480px) {
    font-size: 2.2rem;
    }
`

const Title = () => {
    return (
        <TitleContainer>
            <img src={gitMark} alt='logo do Github versão branca' className='git-mark'/>
            <TitleStyled>Perfil</TitleStyled>
            <img src={gitLogo} alt='Github de forma escrita com cor branca' className='git-logo'/>
        </TitleContainer>
      );
}
 
export default Title;