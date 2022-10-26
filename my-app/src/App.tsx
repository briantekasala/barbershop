import './App.css';
import Footer from './footer/Footer';
import Main from './main/Main';
import MenuTable from './navigation/MenuTable';
import { NavigationMenu } from './navigation/NavigationMenu';

function App() {
  return (
    <div className="App">
      <div className="homeView">
      <NavigationMenu/>
      <Main/>
      <Footer/>
      </div>
      <div className="menuView">
      <MenuTable/>
      </div>
    </div>
  );
}

export default App;
