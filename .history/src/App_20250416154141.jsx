import React, { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { fetchUserData } from "./api.js";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async (searchTerm) => {
    setUsername(searchTerm);
    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data");
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
      )}
    </Background>
  );
}

export default App;