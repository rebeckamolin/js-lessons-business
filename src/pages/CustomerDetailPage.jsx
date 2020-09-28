import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";

const Content = styled.div`
  display: grid;
  font-family: Quicksand;
  margin: 2em;
  padding: 1em;
  background-color: #dfdfdf;
  border-radius: 5px;
  color: #252627;
`;

const DeleteButton = styled.button`
  font-size: 20px;
  padding: 5px;
  margin: 8px;
  background-color: #ee6352;
  border-radius: 3px;
  color: white;
  border: none;
  width: 190px;
  text-shadow: 2px 2px 5px black;
  box-shadow: 3px 3px 5px grey;
  cursor: pointer;
`;

const EditButton = styled(DeleteButton)`
  background-color: #484d6d;
`;

const H1 = styled.h1`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;

export default function CustomerDetailPage(props) {
  const userKit = new UserKit();
  const [customerDetails, setCustomerDetails] = useState({});
  // const [editMode, setEditMode] = useState(false);
  const customerId = props.match.params.id;
  const history = useHistory();

  const handleCustomerDetails = () => {
    userKit
      .getCustomerDetails(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetails(data);
      });
  };

  useEffect(() => {
    handleCustomerDetails();
  }, []);

  const handleDeleteCustomer = () => {
    userKit.deleteCustomer(customerId).then(history.push("../home"));
  };

  return (
    <Content>
      <H1>{customerDetails.name}</H1>
      <p>Organisation Number: {customerDetails.organisationNr}</p>
      <p>VAT Number: {customerDetails.vatNr}</p>
      <p>Reference: {customerDetails.reference}</p>
      <p>Payment Term: {customerDetails.paymentTerm}</p>
      <p>Website: {customerDetails.website}</p>
      <p>Email: {customerDetails.email}</p>
      <p>Phone Number: {customerDetails.phoneNumber}</p>
      <div>
        <DeleteButton onClick={handleDeleteCustomer}>
          Delete customer
        </DeleteButton>
        {/* <EditButton onClick={() => editMode(true)}>Edit</EditButton> */}
        <EditButton>Edit</EditButton>
      </div>
    </Content>
  );
}
