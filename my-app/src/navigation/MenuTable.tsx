import React from "react";
import { createUseStyles } from "react-jss";

const menuTable = createUseStyles({
  menuTable: {
    color: "black",
    width: "100vh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
          <h1>Home</h1>
        </li>
        <li>
          <h1>Price</h1>
        </li>
        <li>
          <h1>Gallery</h1>
        </li>
        <li>
          <h1>Contact</h1>
        </li>
      </ul>
    </div>
  );
}

export default MenuTable;
