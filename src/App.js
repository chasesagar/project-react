
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponents';

function App() {
  return (
    <div className="App">
      
      <Navbar className="transparent-navabr fixed-top" light>
        <div className="fluid-container">
          <NavbarBrand href="/">
            <img className="App-logo" src="./assets/img/chase.jpg"></img>
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
