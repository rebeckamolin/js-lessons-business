import React from "react";
import ActiveUser from "../components/ActiveUser";
import CreateCustomer from "../components/CreateCustomer";
import CustomerList from "../components/CustomerList";
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

export default function HomePage() {
  return (
    <Content>
      <ActiveUser />
      <CustomerList />
      <CreateCustomer />
    </Content>
  );
}
