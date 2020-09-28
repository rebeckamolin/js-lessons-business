import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  font-family: Quicksand;
  padding: 5em;
  text-align: center;
  color: #252627;
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
export default function RegisteredPage() {
  return (
    <Content>
      <h3>
        Thank you for signing up! Please verify your account by clicking the
        link in the email we sent you.
      </h3>
      <Link to="/">
        <Button>Back to loign</Button>
      </Link>
    </Content>
  );
}
