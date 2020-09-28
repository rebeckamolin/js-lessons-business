import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";
import RegisteredPage from "./pages/RegisteredPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import { UserContext } from "./contexts/UserContext";
import { CustomerListContext } from "./contexts/CustomerListContext";
import UserKit from "./data/UserKit";
import LayoutSimple from "./components/LayoutSimple";


function App() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);
  const [activeUserInfo, setActiveUserInfo] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});

  function showCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log("CustomerList: " + data.results);
      });
  }

  function activeUser() {
    userKit
      .getActiveUser()
      .then((res) => res.json())
      .then((result) => setActiveUserInfo(result));
  }

  return (
    <div>
      {
        <CustomerListContext.Provider
          value={{ showCustomerList, customerList, setCustomerList, customerDetails, setCustomerDetails }}
        >
          <UserContext.Provider
            value={{ activeUser, activeUserInfo, setActiveUserInfo }}
          >
            <LayoutSimple>
              <Switch>
                <Route
                  path="/customer/:id"
                  render={(props) => <CustomerDetailPage {...props} />}
                />

                <Route path="/registered">
                  <RegisteredPage />
                </Route>

                <Route path="/register">
                  <RegisterPage />
                </Route>

                <Route path="/login">
                  <LoginPage />
                </Route>

                <Route path="/home">
                  <HomePage />
                </Route>

                <Route path="/">
                  <StartPage />
                </Route>
              </Switch>
            </LayoutSimple>
          </UserContext.Provider>
        </CustomerListContext.Provider>
      }
    </div>
  );
}

export default App;

/*
email: nackademin@willandskill.se
password: js-fend-19
*/
