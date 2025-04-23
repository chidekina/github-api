import { useState } from "react";
import search from "../../assets/search-icon.svg";
import styled from "styled-components";

const SearchBarStyled = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyled = styled.input`
    padding-left: 1rem;
    border: none;
    border-radius: 5px;
    height: 3rem;
    width: 32rem;

    &::placeholder {
        font-weight: bold;
    }

    &:focus::placeholder{
        color: transparent;
    }
`

const SearchButton = styled.button`
    cursor: pointer; 
    display: flex;
    justify-content: center;
    position: absolute;
    background-color: #005CFF;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    left: 30.1rem;
    top: 0.1rem;
    width: 2.8rem;
    height: 2.8rem;

    &:active {
        transform: scale(0.9);
    }

    & img {
        width: 1rem;
    }

`

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSearch) {
            onSearch(input)
        }
    }
    return ( 
        <SearchBarStyled>
        <form onSubmit={handleSubmit}>
        <InputStyled 
        type="text" 
        placeholder="Digite um usuário do Github" 
        />
        <SearchButton>
            <img src={search} alt="icone de uma lupa" />
        </SearchButton>
        </form>
        </SearchBarStyled>
     );
}
 
export default SearchBar;