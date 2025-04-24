import styled from "styled-components";

const ProfileStyled = styled.div`
    background-color: D9D9D9;
    padding: 30px 18px;
    border-radius: 25px;
    display: flex;
    gap: 1rem;

    & img {
        width: 220px;
        height: 220px;
        border-radius: 100%;
    }
`

const ProfileInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h2 {
      color: #005CFF;
      font-weight: bold;
      font-size: 20px;  
    }

    & p {
        font-size: 15px;
    }
`

const ProfileInfo = ({ profile }) => {
    return (
        <ProfileStyled>
            <img src={profile.avatar_url} />
            <ProfileInfoStyled>
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
            </ProfileInfoStyled>
        </ProfileStyled>
    );
}

export default ProfileInfo;