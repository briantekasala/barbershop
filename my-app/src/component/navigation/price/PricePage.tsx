import React, { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import { NavigationMenu } from "../NavigationMenu";
import PriceInfo from "./PriceInfo";
function Price() {
    
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <div>
       <OnClickContext.Provider value={{onClick,setOnClick}}>
      <NavigationMenu />
      <div className="priceTitle">
        <h1>Hair cut price</h1>
      </div>
      <div className="priceInfo">
        <PriceInfo title="Normal hair cut" description="normale knip beurt " price="15"/>
        <PriceInfo title="Beard" description="baard knippen " price="20"/>
        <PriceInfo title="hair coloring" description="Kleuren van Haar " price="20"/>
        <PriceInfo title="Braids" description="Het vlechten van haar" price="15"/>
        <PriceInfo title="bald" description="helemaal kaal" price="15"/>
      </div>
      </OnClickContext.Provider>
    </div>
  );
}

export default Price;
