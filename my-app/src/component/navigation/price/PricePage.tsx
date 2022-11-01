import React, { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import PriceInfo from "./PriceInfo";
function Price() {
    
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <div>
       <OnClickContext.Provider value={{onClick,setOnClick}}>
      <NavigationMenu />
      <PageTitle title="Hair cut price"/>
      <div className="priceInfo">
        <PriceInfo title="Normal hair cut" description="normale knip beurt " price="15"/>
        <PriceInfo title="Beard" description="baard knippen " price="20"/>
        <PriceInfo title="hair coloring" description="Kleuren van Haar " price="20"/>
        <PriceInfo title="Braids" description="Het vlechten van haar" price="15"/>
        <PriceInfo title="bald" description="helemaal kaal" price="15"/>
      </div>
      <Footer />
      </OnClickContext.Provider>
    </div>
  );
}

export default Price;
