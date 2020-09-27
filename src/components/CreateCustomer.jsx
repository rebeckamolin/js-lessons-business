import React, { useContext, useState } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";

const Input = styled.input`
  display: grid;
  margin: 8px;
  background-color: white;
  border: none;
  font-size: 18px;
  border-radius: 2px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 5px;
  margin: 8px;
  background-color: #4b88a2;
  border-radius: 2px;
  color: white;
  border: none;
  width: 190px;
  text-shadow: 2px 2px 5px black;
  box-shadow: 3px 3px 5px grey;
`;

const H2 = styled.h2`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;

export default function CreateCustomer() {
  const userKit = new UserKit();
  const { showCustomerList, setCustomerList } = useContext(CustomerListContext);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleNewClient() {
    userKit
      .createNewClient(
        name,
        organisationNr,
        vatNr,
        reference,
        paymentTerm,
        website,
        email,
        phoneNumber
      )
      .then(() => {
        userKit
          .getCustomerList()
          .then((res) => res.json())
          .then((data) => setCustomerList(data.results));
        showCustomerList();
      });
  }

  // useEffect(() => {
  //   handleNewClient();
  // }, []);

  return (
    <div>
      <H2>Create New Client</H2>
      <label>Name</label>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Organisation number</label>
      <Input
        placeholder="OrganisationNr"
        value={organisationNr}
        onChange={(e) => setOrganisationNr(e.target.value)}
      />
      <label>Vat number</label>
      <Input
        placeholder="vatNr"
        value={vatNr}
        onChange={(e) => setVatNr(e.target.value)}
      />
      <label>Reference</label>
      <Input
        placeholder="reference"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />
      <label>Payment term</label>
      <Input
        placeholder="paymentTerm"
        value={paymentTerm}
        onChange={(e) => setPaymentTerm(e.target.value)}
      />
      <label>Website</label>
      <Input
        placeholder="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <label>Email</label>
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Phone number</label>
      <Input
        placeholder="phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button onClick={handleNewClient}>Add new client</Button>
    </div>
  );
}
