import React, { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";

import {  GoogleMap, useLoadScript } from "@react-google-maps/api";
import Footer from "../../footer/Footer";

function Contact() {
  const [onClick, setOnClick] = useState<boolean>(true);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const defaultProps = {
    center: {
      lat: 51.260197,
      lng: 	4.402771,
    },
    zoom: 10,
  };

  const containerStyle = {
    padding:"15px",
    width: "80%",
    height: "70vh",
    margin:"auto",
    display:"block",

  };

  if (!isLoaded) {

    return(
      <div>
        Loading
      </div>
    )
  }

  return(<>

    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Contacts" />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        ></GoogleMap>
        <div className="contact">
          <div className="contactDescription">
            <h1>Come get a cut  </h1>
          </div>
          <div className="contactInfo">
          <label>Email:</label>
          <p><a href="mailto:briantekasala@hotmail.be">barber@hotmail.com</a></p>
          <label>Address:</label>
          <p> xxx-xxxx-xxx</p>
          <label>Phone:</label>
          <p> xxx-xxx-xxx-xxx</p>
          <p> bel aan of bel</p>
          </div>
        </div>
        <hr></hr>
        
        <Footer/>
      </OnClickContext.Provider>
    </div>

  </>)
 
}

export default Contact;
