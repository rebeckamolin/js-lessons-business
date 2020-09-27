import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Start = styled.div`
  text-align: center;
  padding: 179px;
  font-family: Quicksand;
`;

const Button = styled.button`
  font-size: 20px;
  font-family: Quicksand;
  padding: 5px;
  margin: 8px;
  background-color: #a4a5ae;
  border-radius: 4px;
  color: white;
  border: none;
  height: 50px;
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

export default function StartPage() {

  return (
    <Start>
      <H1>Admin Panel</H1>
      <Link to="/register">
        <Button>Create a new account</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Start>
  );
}
