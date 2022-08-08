import { useState, useEffect } from "react";
import "./App.css";
import Box from "./box";
import Other from "./Other";

function App() {
  const [user, setUser] = useState("John");
  const [age, setAge] = useState("33");
  const [character, setCharacter] = useState("Goodie");
  return (
    <div className="App">
      <h1>Fred</h1>
      <h1>George</h1>
      <Other />
     
      <Box personsname={user} age={age} character={character} />
      <input onChange={(event) => setUser(event.target.value)} />
      <br></br>
      <input onChange={(event) => setAge(event.target.value)} />
      <br></br>
      <input onChange={(event) => setCharacter(event.target.value)} />
    </div>
  );
}

export default App;
