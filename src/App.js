import React from 'react';
import NavBar from './components/UI/NavBar/NavBar.jsx';
import Footer from './components/UI/Footer/Fotter.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Work from './components/Work/Work.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Redirect to='/home' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
