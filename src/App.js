// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './pages/client/nav'
import Footer from './pages/client/footer'
import Routers from './router'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Routers />
        </Switch>
        <Footer />
      </React.Fragment>
  );
}

export default App;
