import React, { Component } from 'react';
import { learnWord, getWords  } from '../firebase/firebase';
import './Word.scss';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.match.params.id || ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const words = getWords();
    words.then(data => {
      const listwords = data.val();
      learnWord({
        id: listwords[this.state.word].id,
        word: this.state.word,
        part: this.partInput.value,
        pronoun: this.pronounInput.value,
        mean: this.meanInput.value,
        example: this.exampleInput.value,
      });
    });
    
  }

  render() {
    return (
      <div className="word">
        <div className="form-element word__name">
          <label className="vocab-label form-element__label">Word: <span className="word__main">{this.state.word}</span></label>
        </div>
        <div className="form-element word__kind">
          <label className="vocab-label form-element__label">Part of speech</label>
          <input type="text" className="vocab-input form-element__input" ref={(input) => { this.partInput = input; }} />
        </div>
        <div className="form-element word__pronoun">
          <label className="vocab-label form-element__label">Pronoun</label>
          <input type="text" className="vocab-input form-element__input" ref={(input) => { this.pronounInput = input; }} />
        </div>
        <div className="form-element word__mean">
          <label className="vocab-label form-element__label">Mean</label>
          <textarea className="vocab-input vocab-input--multiline form-element__input" ref={(input) => { this.meanInput = input; }} />
        </div>
        <div className="form-element word__example">
          <label className="vocab-label form-element__label">Example</label>
          <textarea className="vocab-input vocab-input--multiline form-element__input" ref={(input) => { this.exampleInput = input; }} />
        </div>
        {/* <div className="word__image">
          <label className="vocab-label form-element__label">Image</label>
          <input className="vocab-input form-element__input" type="file" />
        </div> */}
        <div className="form-element form-element--action">
          <button className="vocab-button" onClick={this.onSubmit}>Done</button>
        </div>
      </div>
    );
  }
}

export default Word;
