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
    gap:
`

const profileInfo = ({ name, bio, avatar }) => {
    return (
        <ProfileStyled>
            <img src={avatar} />
            <div>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </ProfileStyled>
    );
}

export default profileInfo;