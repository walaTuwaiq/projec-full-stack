import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";

export default function SignUp() {
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const history = useHistory();
  const changeName = (e) => {
    setAccount(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
      
    const response = await axios.post("http://localhost:5000/signUp", {
        account: account,
      email: email,
      password: password,
    });
    if (response.status === 201){
        history.push("/login")
    }
  };
  return (
    <div className="signup">
      <input
        onChange={(e) => {
          changeName(e);
        }}
        placeholder="enter your account"
      />
      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        placeholder="enter your email"
      />
      <input
        onChange={(e) => {
          changePassword(e);
        }}
        type="password"
        placeholder="enter your password"
      />
      <button
        onClick={() => {
          addUser();
        }}
      >
        sign up
      </button>
    </div>
  );
}
