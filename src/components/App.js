import React, { Component } from 'react';
import AddWord from './AddWord';
import Word from './Word';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            <h1 className="logo">
              <Link to="/" className="logo__link">Vocab2learn</Link>
            </h1>
          </header>

          <Route exact path="/" component={AddWord}/>
          <Route path="/word/:id" component={Word}/>

          <footer className="footer">
            Designed and developed by spideycode © 2018
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
