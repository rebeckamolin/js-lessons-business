import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
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
  cursor: pointer;
`;

const H2 = styled.h2`
  color: white;
  text-shadow: 1px 1px 4px black;
  border: black;
`;
const P = styled.p`
  font-size: 12px;
  color: red;
`;

export const DetailColumn = styled.span`
  display: table-cell;
  background-color: lightgray;
  padding: 2px 5px;
  /* border-bottom: 5px solid white; */
  border-radius: 5px;
  height: 24px;
  vertical-align: middle;
  font-size: 16px;
  background-color: unset;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  organisationNr: yup.number().positive().integer().required(),
  vatNr: yup
    .string()
    .matches(/^[SE]{2}[0-9]{12}$/i)
    .required(),
  reference: yup.string().required(),
  paymentTerm: yup.number().positive().integer().required(),
  website: yup.string().url().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().integer().required(),
});

export default function CreateCustomer() {
  const userKit = new UserKit();
  const { showCustomerList, setCustomerList } = useContext(CustomerListContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

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

  return (
    <form onSubmit={handleSubmit(handleNewClient)}>
      <H2>Create New Client</H2>
      <label>Name</label>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={register}
      />
      {errors.name && <P>This is required.</P>}
      <label>Organisation number</label>
      <Input
        placeholder="OrganisationNr"
        value={organisationNr}
        onChange={(e) => setOrganisationNr(e.target.value)}
        ref={register}
      />
      {errors.organisationNr && <P>This is required.</P>}
      <label>VAT number</label>
      <Input
        placeholder="vatNr"
        value={vatNr}
        onChange={(e) => setVatNr(e.target.value)}
        ref={register}
      />
      {errors.vatNr && (
        <P>This is required and follow this style SE00000000.</P>
      )}
      <label>Reference</label>
      <Input
        placeholder="reference"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        ref={register}
      />
      {errors.reference && <P>This is required.</P>}
      <label>Payment term</label>
      <Input
        placeholder="paymentTerm"
        value={paymentTerm}
        onChange={(e) => setPaymentTerm(e.target.value)}
        ref={register}
      />
      {errors.paymentTerm && <P>This is required.</P>}
      <label>Website</label>
      <Input
        placeholder="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        ref={register}
      />
      {errors.website && <P>This is required.</P>}
      <label>Email</label>
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={register}
      />
      {errors.email && <P>This is required.</P>}
      <label>Phone number</label>
      <Input
        placeholder="phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        ref={register}
      />
      {errors.phoneNumber && <P>This is required.</P>}
      <Button type="submit">Add new client</Button>
    </form>
  );
}
