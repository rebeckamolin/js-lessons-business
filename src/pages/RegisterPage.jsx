import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  font-family: Quicksand;
  margin: 2em;
  padding: 1em;
  background-color: #dfdfdf;
  border-radius: 5px;
  color: #252627;
`;

const Input = styled.input`
  display: grid;
  margin: 8px;
  background-color: white;
  border: none;
  font-size: 18px;
  border-radius: 2px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 5px;
  margin: 8px;
  background-color: #4b88a2;
  border-radius: 2px;
  color: white;
  border: none;
  width: 190px;
  text-shadow: 2px 2px 5px black;
  box-shadow: 3px 3px 5px grey;
`;

const H2 = styled.h2`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  return (
    <Content>
      <H2>Register</H2>
      <p>Enter details to register</p>
      <Input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Organisation Name"
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
      />
      <Input
        placeholder="Organisation Type"
        value={organisationKind}
        onChange={(e) => setOrganisationKind(e.target.value)}
      />
      <Link to="/registered">
        <Button onClick={handleRegister}>Register</Button>
      </Link>
    </Content>
  );
}
