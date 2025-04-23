import { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { fetchUserData } from "./api"


function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async(search) => {
    setUsername(search);
    try {
      const data = await fetchUserData(search);
      setUserData(data);
    } catch (error) {
      console.error("Falha ao carregar informações do usuário.")
    }
  };

  return (
    <Background>
      <Title />
      <SearchBar onSearch={handleSearch} />
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
        </div>
}
    </Background>
  )
}

export default App
