import React from 'react'

export default function Register() {
  return (
    <div>
      
    </div>
  )
}





// import React, { useState } from "react";
// import UserKit from "../data/UserKit";

// export default function registerForm() {
//   const userKit = UserKit();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [organisationName, setOrganisationName] = useState("");
//   const [organisationKind, setOrganisationKind] = useState("");

//   const inputObjects = [
//     ["First Name", firstName, setFirstName],
//     ["Last Name", lastName, setLastName],
//     ["Email", email, setEmail],
//     ["Password", password, setPassword],
//     ["Organisation Name", organisationName, setOrganisationName],
//     ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind],
//   ];

//   function handleRegister() {
//     userKit.register(
//       firstName,
//       lastName,
//       email,
//       password,
//       organisationName,
//       organisationKind
//     );
//   }
//   function renderInput(index, placeholder, stateVariable, stateSetVariable) {
//     return (
//       <div key={index}>
//         <label>{placeholder}</label>
//         <input
//           placeholder={placeholder}
//           value={stateVariable}
//           onChange={(e) => stateSetVariable(e.target.value)}
//         />
//       </div>
//     );
//   }
//   return (
//     <div>
//       {" "}
//       <h2>Register</h2>
//       <p>Enter details to register</p>
//       {inputObjects.map((inputItem, index) => {
//         return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
//       })}
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }

