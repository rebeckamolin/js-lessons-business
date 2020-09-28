import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

export default function LayoutSimple() {
  const history = useHistory();

  function handleGoHome() {
    history.push("/");
  }
  return (
    <Background>
      <Heading>
        <h1 onClick={handleGoHome}>Business Project</h1>
      </Heading>
    </Background>
  );
}
