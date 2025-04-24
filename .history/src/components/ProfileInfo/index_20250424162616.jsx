import styled from "styled-components";

const ProfileStyled = styled.div`
    margin-top: 2rem;
    background-color: #D9D9D9;
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
    const bio = profile.bio?.trim();

    const fallbackBios = [
        "Este ser misterioso preferiu deixar sua bio no mundo dos segredos...",
        "Sem bio. Talvez um espião? Talvez só esquecido mesmo.",
        "Aqui deveria ter uma bio. Mas parece que o(a) dev fugiu antes de escrever.",
        "Descrição? Isso é para os fracos. Esse(a) aqui vive no anonimato.",
        "Nada por aqui. Só o silêncio e a curiosidade..."
    ];

    const getRandom
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