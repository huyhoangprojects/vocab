import React, { Component } from 'react';
import AddWord from './AddWord';
import Word from './Word';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="logo">Vocab2learn</h1>
        </header>
        <AddWord />
        <Word />
        <footer className="footer">
          Designed and developed by spideycode © 2018
        </footer>
      </div>
    );
  }
}

export default App;
