import React, { Component } from 'react';

class AddWord extends Component {
  render() {
    return (
      <div className="add-word">
        <div className="new-word">
          <input className="new-word__input" />
          <button className="new-word_button">Add</button>
        </div>
      </div>
    );
  }
}

export default AddWord;
