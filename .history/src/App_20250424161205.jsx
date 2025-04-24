import { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { fetchUserData } from "./api"
import ProfileInfo from "./components/ProfileInfo";


function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async (search) => {
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
      { 
      userData &&
        <ProfileInfo profile={userData} />
      )}
    </Background>
  )
}

export default App
