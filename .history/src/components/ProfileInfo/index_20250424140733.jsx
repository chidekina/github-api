import styled from "styled-components";

const ProfileStyled = styled.div`
    background-color: white;
    padding: 30px 18px;
    border-radius: 25px;
    display: flex;
    gap: 1rem;
`

const ProfileInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h2 {
      color: 005CFF  
    }
`

const profileInfo = ({ name, bio, avatar }) => {
    return (
        <ProfileStyled>
            <img src={avatar} />
            <ProfileInfoStyled>
                <h2>{name}</h2>
                <p>{bio}</p>
            </ProfileInfoStyled>
        </ProfileStyled>
    );
}

export default profileInfo;