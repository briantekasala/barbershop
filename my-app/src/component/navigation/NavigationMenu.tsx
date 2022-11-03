import * as React from "react";
import { Link } from "react-router-dom";
import { OnClickContext } from "../context/OnClickContext";

export const NavigationMenu = () => {
  const { onClick, setOnClick } = React.useContext(OnClickContext);
  console.log(onClick);
  return (
    <div className="navigation">
      <nav className="navigationMenu">
        <li className="navigationLinkHome">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="navigationLinkLogo">
          <Link to="/">
            <img className="Logo" src="/barberLogo1.png" alt="baber logo" />
          </Link>
        </li>

        <li
          className="navigationLinkMenu"
          onClick={() => {
            setOnClick((prevCheck: any) => !prevCheck);
            console.log(onClick);
          }}
        >
          {onClick ? "Menu" : "Close Menu"}
        </li>

        <li className="navigationLinkReservation"><Link to="/Reservation">Reservation</Link></li>
      </nav>
    </div>
  );
};
