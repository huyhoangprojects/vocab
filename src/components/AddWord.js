import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddWord.scss';


class AddWord extends Component {
  render() {
    return (
      <div className="add-word">
        <div className="new-word">
          <input className="vocab-input new-word__input" />
          <button className="vocab-button new-word__button">Add</button>
        </div>
        <a href="/" className="vocab-button random-word">Get a word</a>
      </div>
    );
  }
}

export default AddWord;
