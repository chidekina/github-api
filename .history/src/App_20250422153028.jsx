import { useState } from "react"
import Background from "./components/Background"
import SearchBar from "./components/SearchBar"
import Title from "./components/Title"


function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async(search) => {
    setUsername(search);
    try {
      const data = await fetchUserData
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
