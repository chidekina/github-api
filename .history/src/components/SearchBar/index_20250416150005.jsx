import styled from "styled-components";

const InputStyled = styled.input`
    border: none;
    border-radius: 20px;
    height: 3cqmax;
`

const SearchBar = () => {
    return ( 
        <InputStyled type="text" placeholder="Digite um usuário do Github">
     );
}
 
export default SearchBar;