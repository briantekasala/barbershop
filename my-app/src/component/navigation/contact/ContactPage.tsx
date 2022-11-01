import React, { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";

function Contact() {
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Contact"/>
      </OnClickContext.Provider>
    </div>
  );
}

export default Contact;
