import search from "../../assets/search-icon.svg";
import styled from "styled-components";

const SearchBarStyled = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyled = styled.input`
    border: none;
    border-radius: 20px;
    height: 3rem;
    width: 80%;
`

const SearchButton = styled.button`
    position: absolute;
    background-color: #005CFF;
    border: none;
    padding: 0.5rem;

`

const SearchBar = () => {
    return ( 
        <SearchBarStyled>
        <InputStyled type="text" placeholder="Digite um usuário do Github" />
        <SearchButton>
            <img src={search} alt="icone de uma lupa" />
        </SearchButton>
        </SearchBarStyled>
     );
}
 
export default SearchBar;