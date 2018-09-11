import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddWord.scss';
import { addWord, getWords } from '../firebase/firebase';

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      id: '',
      error: ''
    }
  }

  onClick() {
    if(this.textInput.value) {
      const words = getWords();

      words.then(data => {
        const listwords = data.val();
        let isAdd = true;
        for (let word in listwords) {
          if (word === this.textInput.value) isAdd = false
        }
        if (isAdd) {
          addWord(this.textInput.value)
          this.setState({
            error: ''
          },
            () => this.textInput.value = ''
          );
        } else {
          this.setState({
            error: 'This word is existed'
          });
        }
      });
    } else {
      this.setState({
        error: 'Enter a word, please'
      })
    }
  }

  onFocus() {
    this.setState({
      error: ''
    })
  }

  componentWillMount() {
    const words = getWords();
    words.then(data => {
      const listwords = data.val();
      let arrId = [];
      for (let word in listwords) {
        if(listwords[word].status === 'new') arrId.push(word)
      }
      const word = arrId[Math.floor(Math.random() * arrId.length)]
      this.setState({
        id: word
      })
    });
  }

  render() {
    return (
      <div className="add-word">
        <div className="new-word">
          <input className="vocab-input new-word__input" ref={(input) => { this.textInput = input; }} onFocus={this.onFocus}/>
          <button className="vocab-button new-word__button" onClick={this.onClick}>Add</button>
          {
            this.state.error &&
            <p className="vocab-error"><small>{this.state.error}</small></p>
          }
        </div>
        <Link to={`word/${this.state.id}`} className="vocab-button random-word">Get a word</Link>
      </div>
    );
  }
}

export default AddWord;
