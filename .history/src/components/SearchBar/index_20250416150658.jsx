import search from "../../assets/search-icon.svg";
import styled from "styled-components";

const SearchBarStyled = styled.div

const InputStyled = styled.input`
    border: none;
    border-radius: 20px;
    height: 3cqmax;
`

const SearchBar = () => {
    return ( 
        <SearchBarStyled>
        <InputStyled type="text" placeholder="Digite um usuário do Github" />
        </SearchBarStyled>
     );
}
 
export default SearchBar;