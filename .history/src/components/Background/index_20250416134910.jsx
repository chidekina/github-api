import styled from "styled-components";

const MainStyled = styled.main`
    b
`

const background = ({ children }) => {
    return (
        <main>
            {children}
        </main>
      );
}
 
export default background;