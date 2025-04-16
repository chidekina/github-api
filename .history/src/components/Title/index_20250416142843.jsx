import styled from 'styled-components';
import gitLogo from '../../assets/github-mark-white.svg';

const TitleStyled = styled.div`
    
`

const Title = () => {
    return (
        <div>
            <img src={gitLogo} alt='logo do Github versão branca' />
            <h1>Perfil</h1>
        </div>
      );
}
 
export default Title;