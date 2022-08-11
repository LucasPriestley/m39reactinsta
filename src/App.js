import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "./utils";
import SignupOrLogin from "./components/signupOrLogin";
import UpdateUser from "./components/UpdateUser";
import "./App.css";
import Box from "./components/box";


function App() {
  const [user, setUser] = useState();
  const [listUsers, setListUsers] = ([])
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <div className="App">
      <SignupOrLogin setter={setUser} />
      <br></br>
      {{ user } ? <h1>{user} logged in </h1> : <h1>not logged in</h1>}
      <br></br>
      <button onClick={(event) => getAllUsers(setListUsers)}>List Users</button>
      {getAllUsers &&
        users.map((item, index) => {
          return (
            <div></div>
          );
        })}
      {/* <p>{listUsers}</p> */}
      <br></br>
      <button onClick={(event) => deleteUser(user)}>Delete User</button>
      <br></br>
      <br></br>
      < UpdateUser userProp={user}/>
      <br></br>
      <button onClick={(event) => setDisplay(!displayImages)}>
        Click Me On
      </button>
     
      {displayImages &&
        myPics.map((item, index) => {
          return (
            <Box author={item.author} image={item.download_url} key={index} />
          );
        })}

    </div>
  );
}

export default App;
