import React, { Component } from 'react';

class CardImg extends Component {
  render() {
    return (
      <div className="App">
        <input class="modal-state" id={this.props.docsId} type="checkbox" />
        <div class="modal">
          <label class="modal-bg" for={this.props.docsId}></label>
          <div class="modal-inner">
            <label class="modal__close" for={this.props.docsId}></label>
            <h2>{this.props.docLabel}</h2>
            <p><img src={this.props.docs} /></p>
          </div>
        </div>

        <div className="flex-container flex-wrap ">
          <div className={this.props.class}>
            <div className="card-img-container">
              <div className="card-img-header">
                <h3>
                  {this.props.docLabel}
                </h3>
                <p>
                  {this.props.docDate}
                </p>
              </div>
              <div className="img">
                <img src={this.props.docs} />
              </div>
              <div className="col xl-12 l-12 m-12 s-12 xs-12 no-padding">
                <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn btn active" >
                  <label>
                    Other option
              </label>
                </button>
                <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn btn" >
                  <label for={this.props.docsId}>
                    View document
                </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardImg;