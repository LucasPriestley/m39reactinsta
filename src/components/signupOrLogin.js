import { useState } from "react";
import { signUp } from "../utils";

const SignupOrLogin = ({setter}) => {
    const [username, setUsername] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        await signUp(username, firstname, lastname, email, password, setter );
    }

return (
    <form onSubmit={submitHandler}>
        <label>Username:
            <input onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br></br>
        <label>First name:
            <input onChange={(event) => setFirstname(event.target.value)} />
        </label>
        <br></br>  
        <label>Last name:
            <input onChange={(event) => setLastname(event.target.value)} />
        </label>
        <br></br>  
        <label>Email:
            <input type="email" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br></br>  
        <label>Password:
            <input onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br></br>
       <button type="submit">Click here to signup or login</button> 
    </form>
)

}

export default SignupOrLogin;