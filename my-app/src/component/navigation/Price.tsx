import React, { useState } from "react";
import { OnClickContext } from "../context/OnClickContext";
import { NavigationMenu } from "./NavigationMenu";
function Price() {
    
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <div>
       <OnClickContext.Provider value={{onClick,setOnClick}}>
      <NavigationMenu />
      </OnClickContext.Provider>
    </div>
  );
}

export default Price;
