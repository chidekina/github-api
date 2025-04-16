import styled from 'styled-components';
import gitLogo from '../../assets/github-mark-white.svg';

const TitleStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2rem;

    & img {
    width: 30%;
    height: auto;
    object-fit: contain; 
}
`

const Title = () => {
    return (
        <TitleStyled>
            <img src={gitLogo} alt='logo do Github versão branca' />
            <h1>Perfil</h1>
        </TitleStyled>
      );
}
 
export default Title;