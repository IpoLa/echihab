import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer.js'
import Number from './Numbers.js'
// import Contact from './Contact.js'
import Team from './Team.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/numbers">
            <Header />
            <Navbar className='nav' />
            <Number style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}/>
            <Footer className='footer' />
          </Route>
          <Route path="/team">
            <Header /> 
            <Navbar className='nav' />
            <Team />
            <Footer className='footer' />
          </Route>
          {/* <Route path="/contact">
            <Header />
            <Navbar className='nav' />
            <Contact />
            <Footer className='footer' />
          </Route> */}
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
