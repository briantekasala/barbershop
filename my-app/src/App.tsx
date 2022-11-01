import "./App.css";
import Footer from "./footer/Footer";
import Main from "./component/main/Main";
import MenuTable from "./component/navigation/MenuTable";
import { NavigationMenu } from "./component/NavigationMenu";
import { useState } from "react";


function App() {
  const [onClick, setOnClick] = useState<boolean>(true);

  return (
    <div className="App">
      {onClick ? (
        <div>
          <NavigationMenu setOnClick={setOnClick} onClick={onClick} />
          <Main />
          <Footer />
        </div>
      ) : (
        <>
            <NavigationMenu setOnClick={setOnClick} onClick={onClick} />
            <div className="homeView">
            <Main />
            <Footer />
          </div>
          <div className="menuView">
            <MenuTable />
          </div>
      
        </>
      )}
    </div>
  );
}

export default App;
