import './App.css';
import Footer from './footer/Footer';
import Main from './main/Main';
import { NavigationMenu } from './navigation/NavigationMenu';

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
