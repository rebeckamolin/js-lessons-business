import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #5f5980;
  padding: 0.5em;
  color: white;
  font-family: Quicksand;
  h1 {
    text-shadow: 2px 2px 5px black;
  }
`;
const Background = styled.div`
  background-color: #fff9fb;
`;

const SignOutButton = styled.button`
  font-size: 12px;
  font-family: Quicksand;
  padding: 5px;
  margin: 8px;
  background-color: #b8ebd0;
  border-radius: 3px;
  color: black;
  border: none;
  align-self: flex-start;
`;

export default function LayoutSimple({ children }) {
  const { activeUserInfo } = useContext(UserContext);
  const userKit = new UserKit();
  const history = useHistory();

  const handleLogOut = () => {
    userKit.logout();
    history.push("/");
    window.location.reload();
  };

  return (
    <Background>
      <Heading>
        <h1>Business Project</h1>
        <div>
          <p>
            Signed in as {activeUserInfo.firstName} {activeUserInfo.lastName}
          </p>
          <p>
            <small>{activeUserInfo.email}</small>
          </p>
          <SignOutButton onClick={handleLogOut}>Sign out</SignOutButton>
        </div>
      </Heading>
      <div>{children}</div>
    </Background>
  );
}
