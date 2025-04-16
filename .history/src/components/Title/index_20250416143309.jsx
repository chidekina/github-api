import styled from 'styled-components';
import gitLogo from '../../assets/github-mark-white.svg';

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 1rem;

    & img {
    width: 20%;
    height: auto;
    object-fit: contain; 
}
`

const

const Title = () => {
    return (
        <TitleContainer>
            <img src={gitLogo} alt='logo do Github versão branca' />
            <h1>Perfil</h1>
        </TitleContainer>
      );
}
 
export default Title;