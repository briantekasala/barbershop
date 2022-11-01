import * as React from "react";

interface INavigationMenu {
  setOnClick: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: boolean;
}
export const NavigationMenu = (props: INavigationMenu) => {
  const { setOnClick, onClick } = props;
  return (
    <div className="navigation">
      <nav className="navigationMenu">
        <li className="navigationLinkHome">Home</li>
        <li className="navigationLinkLogo">
          <img src="/barberLogo1.png" alt="baber logo" />
        </li>

        <li
          className="navigationLinkMenu"
          onClick={() => {
            setOnClick((prevCheck) => !prevCheck);
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
