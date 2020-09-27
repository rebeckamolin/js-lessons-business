import React from "react";
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

export default function LayoutSimple({ children }) {
  return (
    <Background>
      <Heading>
        <h1>Business Project</h1>
      </Heading>
    </Background>
  );
}
