import React from "react";
import styled from "styled-components";

const Content = styled.div`
  font-family: Quicksand;
  padding: 5em;
  text-align: center;
  color: #252627;
`;
export default function RegisteredPage() {
  return (
    <Content>
      <h3>
        Thank you for signing up! Please verify your account by clicking the
        link in the email we sent you.
      </h3>
    </Content>
  );
}
