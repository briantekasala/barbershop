import React, { useRef, useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
function Login() {
  const [onClick, setOnClick] = useState<boolean>(true);
  let emailInputRef = useRef(null);
  let passwordInputRef = useRef(null);
 
  return (
    <OnClickContext.Provider value={{ onClick, setOnClick }}>
      <NavigationMenu />
      <PageTitle title="login" />
      <div className="loginLayout">
      <input
       className="loginInput"
        ref={emailInputRef}
        type="text"
        placeholder="User"
      />
      <input
        ref={passwordInputRef}
        type="password"
        placeholder="Password"
      />
      </div>
     
    </OnClickContext.Provider>
  );
}

export default Login;
