import * as React from "react";
import { Link } from "react-router-dom";
import { OnClickContext } from "../context/OnClickContext";


export const NavigationMenu = () => {
    const {onClick,setOnClick}= React.useContext(OnClickContext);
    console.log(onClick)
  return (
    <div className="navigation">
      <nav className="navigationMenu">
        <li className="navigationLinkHome">
          <Link to="/" className="navigationLinkHome">
            Home
          </Link>
        </li>
        <li className="navigationLinkLogo">
          <img src="/barberLogo1.png" alt="baber logo" />
        </li>

        <li
          className="navigationLinkMenu"
          onClick={() => {
            
            setOnClick((prevCheck:any) => !prevCheck);
            console.log(onClick);
          }}
        >
          {onClick ? "Menu" : "Close Menu"}
        </li>

        <li className="navigationLinkReservation">Reservation</li>
      </nav>
    </div>
  );
};
