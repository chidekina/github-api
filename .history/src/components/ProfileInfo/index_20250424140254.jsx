import styled from "styled-components";

const ProfileStyled = styled.div`
background-color: white;
padding: 30px 18px;
border-radius: 25px;
display: flex;
gap: 1rem;
`

const profileInfo = ({ name, bio, avatar }) => {
    return (
        <ProfileStyled>
            <img src={avatar} alt="" />
        </ProfileStyled>
      );/
}
 
export default profileInfo;