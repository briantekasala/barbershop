import React from "react";
import { createUseStyles } from "react-jss";



const menuTable = createUseStyles({
  menuTable:{
    color:"blue",
    border:"solid",
    width:"100vh",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    zIndex:1
  }
})
function MenuTable() {
  const styles = menuTable();
  return (
    <div className={styles.menuTable}>
      <ul>
        <li>Home</li>
        <li>price</li>
        <li>gallery</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default MenuTable;
