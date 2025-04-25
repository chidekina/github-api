import notFound from "../../assets/olhos-desconfiados.png"
import styled from "styled-components";

const ProfileStyled = styled.div`
    margin-top: 2rem;
    background-color: #D9D9D9;
    padding: 30px 18px;
    border-radius: 25px;
    display: flex;
    gap: 2rem;
    width: 804px;
    height: 240px;

    & img {
        width: 220px;
        height: 220px;
        border-radius: 100%;
    }

    @media only screen and (max-width: 480px) {
        margin-top: 1rem;
        gap: 1rem;
        width: 240px;
        padding: 15px 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & img {
            width: 100px;
            height: 100px;
        }
    }
    @media only screen and (max-width: 768px) {
        
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

    @media only screen and (max-width: 480px) {
     gap: 0.5rem;
     align-items: center;
     text-align: center;

     & h2 {
        font-size: 15px;
     }

     & p {
        font-size: 14px;
     }
    }
`

const ProfileNotFound = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h2 {
      color: red;
      font-weight: bold;
      font-size: 20px;  
    }

    & p {
        font-size: 15px;
    }

    @media only screen and (max-width: 480px) {
     gap: 0.5rem;
     align-items: center;
     text-align: center;

     & h2 {
        font-size: 15px;
     }

     & p {
        font-size: 14px;
     }
    }
`

const ProfileInfo = ({ profile, error }) => {

    if (error) {
        return (
            <ProfileStyled>
                <img src={notFound} alt="" />
                <ProfileNotFound>
                    <h2>😬 Usuário não encontrado!</h2>
                    <p>
                        Parece que esse perfil do GitHub caiu em um buraco negro ou foi abduzido por aliens.<br></br>
                        Tente outro nome de usuário. 👽🚀
                    </p>
                </ProfileNotFound>
            </ProfileStyled>
        );
    }

    if (!profile) return null;

    const bio = profile.bio?.trim();

    const fallbackBios = [
        "Este ser misterioso preferiu deixar sua bio no mundo dos segredos...",
        "Sem bio. Talvez um espião? Talvez só esquecido mesmo.",
        "Aqui deveria ter uma bio. Mas parece que o(a) dev fugiu antes de escrever.",
        "Descrição? Isso é para os fracos. Esse(a) aqui vive no anonimato.",
        "Nada por aqui. Só o silêncio e a curiosidade..."
    ];

    const getRandomFallback = () =>
        fallbackBios[Math.floor(Math.random() * fallbackBios.length)];

    return (
        <ProfileStyled>
            <img src={profile.avatar_url} />
            <ProfileInfoStyled>
                <h2>{profile.name}</h2>
                <p>{bio || getRandomFallback()}</p>
            </ProfileInfoStyled>
        </ProfileStyled>
    );
}

export default ProfileInfo;