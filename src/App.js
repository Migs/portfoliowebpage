import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; 
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './css/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component = {Home}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
