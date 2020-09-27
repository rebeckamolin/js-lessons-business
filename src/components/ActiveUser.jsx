import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import UserKit from "../data/UserKit";

export default function ActiveUser() {
  const userKit = new UserKit();
  const { setActiveUserInfo } = useContext(UserContext);

  const activeUser = () => {
    userKit
      .getActiveUser()
      .then((res) => res.json())
      .then((result) => setActiveUserInfo(result));
  };
  useEffect(() => {
    activeUser();
  }, []);

  return <div></div>;
}
