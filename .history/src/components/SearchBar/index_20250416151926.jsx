import search from "../../assets/search-icon.svg";
import styled from "styled-components";

const SearchBarStyled = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyled = styled.input`
    pa
    border: none;
    border-radius: 5px;
    height: 3rem;
    width: 32rem;
`

const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    position: absolute;
    background-color: #005CFF;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    left: 29.2rem;
    top: 0.1rem;
    width: 2.7rem;
    height: 2.7rem;

    & img {
        width: 1rem;
    }

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