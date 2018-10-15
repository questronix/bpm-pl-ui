import React, { Component } from 'react';

class CardImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container flex-wrap ">
          <div className="card-img-container">
            <div className="card-img-header">
              <div className="card-title">
                This is the card title
              </div>
              <div className="card-desc">
                This is the card description
              </div>
            </div>
              <img className="https://images.unsplash.com/photo-1539471528744-ecf6aea851d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c9de5b70afa09231b7d8b40e69a7aaa&auto=format&fit=crop&w=1500&q=80"/>
            <div className="col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn active">
                Active
              </button>
              <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardImg;