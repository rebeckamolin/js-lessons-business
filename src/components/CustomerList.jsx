import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";

const List = styled.li`
  list-style: none;
  max-width: 250px;
  background-color: #efe9f4;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  box-shadow: 3px 3px 5px grey;

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: black;
    }
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
const Text = styled(Name)`
  font-size: 14px;
  font-weight: normal;
  margin: 0;
`;

const H2 = styled.h2`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;

export default function CustomerList() {
  const { showCustomerList, customerList } = useContext(CustomerListContext);
  useEffect(() => {
    showCustomerList();
  }, []);

  return (
    <div>
      <H2>Customer List</H2>
      <ul>
        {customerList &&
          customerList.map((customer) => {
            const id = customer.id;
            return (
              <List key={id}>
                <Link to={`customer/${id}`}>
                  <Name>{customer.name}</Name>
                  <Text>Reference: {customer.reference}</Text>
                  <Text>Organisation Number: {customer.organisationNr}</Text>
                </Link>
              </List>
            );
          })}
      </ul>
    </div>
  );
}
