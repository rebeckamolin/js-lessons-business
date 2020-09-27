import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  margin: 2px;
  background-color: white;
  border: none;
  font-size: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  height: 35px;
`;

const Start = styled.div`
  text-align: center;
  padding: 179px;
  font-family: Quicksand;
`;
const Button = styled.button`
  font-size: 20px;
  font-family: Quicksand;
  margin: 8px;
  background-color: #a4a5ae;
  border-radius: 4px;
  color: white;
  border: none;
  height: 35px;
  width: 230px;
  text-shadow: 2px 2px 5px black;
  box-shadow: 3px 3px 5px grey;
  cursor: pointer;

  :active {
  box-shadow: 0 5px grey;
  transform: translateY(4px);
`;

const H1 = styled.h1`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;

export default function LoginPage() {
  const userKit = new UserKit();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  return (
    <Start>
      {uid && token ? (
        <div>
          <H1>Activate Account</H1>
          <Button onClick={handleActivateUser}>Activate User</Button>
        </div>
      ) : (
        <div>
          <H1>Login</H1>
          <Input
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </Start>
  );
}
