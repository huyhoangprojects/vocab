import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="word">
        <div className="form-element word__name">
          <label className="vocab-label form-element__label">Word</label>
          <input type="text" className="vocab-input form-element__input" />
        </div>
        <div className="form-element word__kind">
          <label className="vocab-label form-element__label">Part of speech</label>
          <input type="text" className="vocab-input form-element__input" />
        </div>
        <div className="form-element word__pronoun">
          <label className="vocab-label form-element__label">Pronoun</label>
          <input type="text" className="vocab-input form-element__input" />
        </div>
        <div className="form-element word__mean">
          <label className="vocab-label form-element__label">Mean</label>
          <textarea className="vocab-input vocab-input--multiline form-element__input" />
        </div>
        <div className="form-element word__example">
          <label className="vocab-label form-element__label">Example</label>
          <textarea className="vocab-input vocab-input--multiline form-element__input" />
        </div>
        {/* <div className="word__image">
          <label className="vocab-label form-element__label">Image</label>
          <input className="vocab-input form-element__input" type="file" />
        </div> */}
        <div className="form-element form-element--action">
          <button className="vocab-button">Done</button>
        </div>
      </div>
    );
  }
}

export default Word;
