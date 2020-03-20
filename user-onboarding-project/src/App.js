import React, { useState, useEffect } from "react";
import "./App.css";
import UserForm from "./components/Form";
import axios from "axios";
import UserComp from "./components/User";

function App() {
  const [user, setUser] = useState([
    {
      name: "",
      password: "",
      email: "",
      title: ""
    }
  ]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  const addUserHandler = newUser => {
    setUser([...user, newUser]);
  };

  return (
    <div>
      <UserForm addUser={addUserHandler} />
      <UserComp users={user} />
    </div>
  );
}

export default App;
