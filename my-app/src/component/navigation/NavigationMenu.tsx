import * as React from "react";
import { Link } from "react-router-dom";
import { OnClickContext } from "../context/OnClickContext";

export const NavigationMenu = () => {
  const { onClick, setOnClick } = React.useContext(OnClickContext);
  return (
    <div className="navigation">
      <nav className="navigationMenu">
        <li className="navigationLinkHome">
          <Link className="navigationLink" to="/">
            Home
          </Link>
        </li>
        <li className="navigationLinkLogo">
          <Link className="navigationLink" to="/">
            <img className="Logo" src="/barberLogo1.png" alt="baber logo" />
          </Link>
        </li>

        <li
          className="navigationLinkMenu"
          onClick={() => {
            setOnClick((prevCheck: any) => !prevCheck);
          }}
        >
          {onClick ? "Menu" : "Close Menu"}
        </li>

        <li className="navigationLinkReservation">
          <Link className="navigationLink" to="/Reservation">
            Reservation
          </Link>
        </li>
      </nav>
    </div>
  );
};
