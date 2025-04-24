import { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { fetchUserData } from "./api"
import ProfileInfo from "./components/ProfileInfo";


function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setProfile(null);

    const { data, error } = await fetchUserData(username);
  
    if (error) {
      setError(error);
    } else {
      setProfile(dat)
    }
  };

  return (
    <Background>
      <Title />
      <SearchBar onSearch={handleSearch} />
      { 
      userData && (
        <ProfileInfo profile={userData} />
      )}
    </Background>
  )
}

export default App
