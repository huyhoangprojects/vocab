import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddWord.scss';
import { addWord } from '../firebase/firebase';

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    addWord(this.textInput.value)
  }
  render() {
    return (
      <div className="add-word">
        <div className="new-word">
          <input className="vocab-input new-word__input" ref={(input) => { this.textInput = input; }}/>
          <button className="vocab-button new-word__button" onClick={this.onClick}>Add</button>
        </div>
        <Link to="/word/99" className="vocab-button random-word">Get a word</Link>
      </div>
    );
  }
}

export default AddWord;
