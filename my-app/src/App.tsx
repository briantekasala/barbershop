import "./App.css";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import MenuTable from "./component/navigation/MenuTable";
import { NavigationMenu } from "./component/navigation/NavigationMenu";
import { useState } from "react";
import { OnClickContext } from "./component/context/OnClickContext";

function App() {
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <OnClickContext.Provider value={{ onClick, setOnClick }}>
      <div className="App">
        {onClick ? (
          <div>
            <NavigationMenu />
            <Main />
            <Footer />
          </div>
        ) : (
          <>
            <NavigationMenu />
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
    </OnClickContext.Provider>
  );
}

export default App;
