import React, { useRef } from "react";
import bcrypt from "bcryptjs";
import { IUser } from "../../../models/IUser";
import { UserService } from "../../../services/UserService";

export interface ILoginMenu {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userService: UserService;
}

const LoginMenu = (props: ILoginMenu) => {
  const { setIsLoggedIn, userService } = props;
  let userInputRef = useRef(null);
  let passwordInputRef = useRef(null);

  const logUserIn = async () => {
    if (passwordInputRef?.current?.["value"] === "") {
      alert("Geef uw password in ");
    } else if (userInputRef?.current?.["value"] === "") {
      alert("Geef user name in");
    } else {
      let user = userInputRef?.current?.["value"];
      const password: any = passwordInputRef?.current?.["value"];
      const userDetails: IUser[] = await userService.getUser(user);

      const hashedPassword = await bcrypt.hash(password, 10);

      bcrypt.compare(userDetails[0].Password, hashedPassword, (err, res) => {
        if (res) {
          console.log("oke ");
          setIsLoggedIn((prv:any)=> !prv);
        } else {
          console.log("not oke");
        }
      });
    }
  };

  return (
    <div className="loginLayout">
      <input
        className="loginInput"
        ref={userInputRef}
        type="text"
        placeholder="Dieudomak"
        value={"Dieudomak"}
      />
      <input ref={passwordInputRef} type="password" placeholder="password" value={"DieuVPAq3"} />
      <button onClick={logUserIn}>Login</button>
    </div>
  );
};

export default LoginMenu;
