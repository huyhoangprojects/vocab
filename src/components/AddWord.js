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
      id: NaN,
      error: ''
    }
  }

  onClick() {
    if(this.textInput.value) {
      addWord(this.textInput.value)
      this.setState({
        error: ''
      },
        () => this.textInput.value = ''
      )
    } else {
      this.setState({
        error: 'Vui lòng nhập từ mới'
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
        arrId.push(listwords[word].id)
      }
      const randomId = arrId[Math.floor(Math.random() * arrId.length)]
      this.setState({
        id: randomId
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
