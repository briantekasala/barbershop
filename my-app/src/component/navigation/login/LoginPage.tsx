import React, { useState } from "react";
import { UserService } from "../../../services/UserService";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import LoginMEnu from "./LoginMenu";
import Note from "./Note";
import PlanningAsker from "./PlannigAsker";

function Login() {
  const [onClick, setOnClick] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const userService = new UserService("http://localhost:3005");
  return (
    <OnClickContext.Provider value={{ onClick, setOnClick }}>
      <NavigationMenu />
      <PageTitle title="login" />
      {isLoggedIn ? (
        <>
        <div className="planningSchema">
          <PlanningAsker />
          <div className="planningList">
            <Note />
            <Note/>
            <Note/>
            <Note />
            <Note/>
            <Note/>
          </div>
        </div>
        <Footer/>
        </>
      ) : (
        <LoginMEnu setIsLoggedIn={setIsLoggedIn} userService={userService} />
      )}
    </OnClickContext.Provider>
  );
}

export default Login;
