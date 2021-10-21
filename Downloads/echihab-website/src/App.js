import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer.js'
import Number from './Numbers.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/numbers/">
            <Header />
            <Navbar className='nav' />
            <Number style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}/>
            <Footer className='footer' />
          </Route>
          <Route path="/contact/">
            <h1>Contact</h1>
          </Route>
          <Route path="/">
            <Header />
            <Navbar className='nav' />
            <Body />
            <Footer className='footer' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
