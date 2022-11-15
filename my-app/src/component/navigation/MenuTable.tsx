import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const menuTable = createUseStyles({
  menuTable: {
    color: "black",
    width: "100vh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    cursor: "pointer",
    "& h1": {
      fontSize: "50px",
    },
  },
});

function MenuTable() {
  const styles = menuTable();
  return (
    <div className={styles.menuTable}>
      <ul>
        <li>
          <Link className="navigationLink" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link className="navigationLink" to="/Price">
            <h1>Price</h1>
          </Link>
        </li>
        <li>
          <Link className="navigationLink" to="/Gallery">
            <h1>Gallery</h1>
          </Link>
        </li>
        <li>
          <Link className="navigationLink" to="/Contact">
            <h1>Contact</h1>
          </Link>
        </li>
        <li>
          <Link className="navigationLink" to="/Login">
            <h1>Login</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuTable;
