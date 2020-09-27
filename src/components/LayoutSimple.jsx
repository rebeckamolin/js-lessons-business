import React from "react";
import UserKit from "../data/UserKit";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
  color: lightgrey;
  padding: 3em;
`;

export default function LayoutSimple({ children }) {
  const userKit = new UserKit();
  const token = userKit.getToken();

  return (
    <div>
      {token && <SignedIn />}
      {!token && <SignedOut />}
      <main>{children}</main>
      <Footer>Rebecka Molin © 2020</Footer>
    </div>
  );
}
