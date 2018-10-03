import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="App">
        <div className="card-alt">
          <div className="card-header">
            <h2>
              This is a card header
            </h2>
          </div>
          <div className="card-body">
            this is a card body
          </div>
        </div>
      </div>
    );
  }
}

export default Card;