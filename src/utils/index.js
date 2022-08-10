export const signUp = async (username, email, password, setter ) => {
  
  try {
    const response = await fetch("http://localhost:5000/user",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })
    });
    const data = await response.json();
    console.log(data)
    setter(data.newUser.username);

  } catch (error) {
    console.log(error);
  }
};

