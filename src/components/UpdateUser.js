import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = (userProp) => {;
    const [password, setPassword] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        await updateUser(userProp, password);
        console.log(userProp)
    }

return (
    <form onSubmit={submitHandler}>
        <label>New Password:
            <input onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br></br>  
        <br></br>
       <button type="submit">Update User</button> 
    </form>
)

}

export default UpdateUser;