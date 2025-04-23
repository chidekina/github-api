import { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { fetch}


function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async(search) => {
    setUsername(search);
    try {
      const data = await fetchUserData(search)
    }
  }
  return (
    <Background>
      <Title />
      <SearchBar />
    </Background>
  )
}

export default App
