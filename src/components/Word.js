import React, { Component } from 'react';

class Word extends Component {
  render() {
    return (
      <div className="word">
        <div className="form-element word__name">
          <label className="form-element__label">Word</label>
          <input type="text" className="form-element__input" />
        </div>
        <div className="word__kind">
          <label className="form-element__label">Part of speech</label>
          <input type="text" className="form-element__input" />
        </div>
        <div className="word__pronoun">
          <label className="form-element__label">Pronoun</label>
          <input type="text" className="form-element__input" />
        </div>
        <div className="word__mean">
          <label className="form-element__label">Mean</label>
          <input type="text" className="form-element__input" />
        </div>
        <div className="word__example">
          <label className="form-element__label">Example</label>
          <input type="text" className="form-element__input" />
        </div>
        {/* <div className="word__image">
          <label className="form-element__label">Image</label>
          <input className="form-element__input" type="file" />
        </div> */}
      </div>
    );
  }
}

export default Word;
