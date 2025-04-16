import styled from 'styled-components';
import gitLogo from '../../assets/github-mark-white.svg';

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
    gap: 0.5rem;

    & img {
    width: 20%;
    object-fit: contain;
    height: fit-content;
}
`

const TitleStyled = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 400;
`

const Title = () => {
    return (
        <TitleContainer>
            <img src={gitLogo} alt='logo do Github versão branca' />
            <TitleStyled>Perfil</TitleStyled>
        </TitleContainer>
      );
}
 
export default Title;