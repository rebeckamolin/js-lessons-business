import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import styled from "styled-components";

/*

This page does now work and is not a part of the project.
I left it so i could figure out what doesn't work later on.

*/

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

export default function EditCustomer({
  setEditMode,
  handleCustomerDetails,
  customerId,
}) {
  const userKit = new UserKit();
  const { customerList } = useContext(CustomerListContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    userKit
      .editCustomer(data, customerId)
      .then(userKit.customerList(customerId))
      .then(handleCustomerDetails())
      .then(setEditMode(false));
  };

  //   function handleNewClient() {
  //     userKit
  //       .createNewClient(
  //         name,
  //         organisationNr,
  //         vatNr,
  //         reference,
  //         paymentTerm,
  //         website,
  //         email,
  //         phoneNumber
  //       )
  //       .then(() => {
  //         userKit
  //           .getCustomerList()
  //           .then((res) => res.json())
  //           .then((data) => setCustomerList(data.results));
  //         showCustomerList();
  //       });
  //   }

  //   // useEffect(() => {
  //   //   handleNewClient();
  //   // }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <H2>Create New Client</H2>
      <label>Name</label>
      <Input
        placeholder="Name"
        DefaultValue={customerList.name}
        ref={register}
      />
      {errors.name && <p>This is required.</p>}
      <label>Organisation number</label>
      <Input
        placeholder="OrganisationNr"
        DefaultValue={customerList.organisationNr}
        ref={register}
      />
      {errors.organisationNr && <p>This is required.</p>}
      <label>VAT number</label>
      <span></span>
      <Input
        placeholder="vatNr"
        DefaultValue={customerList.namevatNr}
        ref={register}
      />
      {errors.vatNr && (
        <p>This is required and follow this style SE00000000.</p>
      )}
      <label>Reference</label>
      <Input
        placeholder="reference"
        DefaultValue={customerList.reference}
        ref={register}
      />
      {errors.reference && <p>This is required.</p>}
      <label>Payment term</label>
      <Input
        placeholder="paymentTerm"
        DefaultValue={customerList.paymentTerm}
        ref={register}
      />
      {errors.paymentTerm && <p>This is required.</p>}
      <label>Website</label>
      <Input
        placeholder="website"
        DefaultValue={customerList.website}
        ref={register}
      />
      {errors.website && <p>This is required.</p>}
      <label>Email</label>
      <Input
        placeholder="email"
        DefaultValue={customerList.email}
        ref={register}
      />
      {errors.email && <p>This is required.</p>}
      <label>Phone number</label>
      <Input
        placeholder="phone number"
        DefaultValue={customerList.phoneNumber}
        ref={register}
      />
      {errors.phoneNumber && <p>This is required.</p>}
      <Button type="submit">Add new client</Button>
    </form>
  );
}