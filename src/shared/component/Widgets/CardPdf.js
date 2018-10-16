import React, { Component } from 'react';

class CardPdf extends Component {
  render() {
    return (
      <div className="flex-container flex-wrap ">
        <input class="modal-state" id={this.props.docsId} type="checkbox" />
        <div class="modal">
          <label class="modal-bg" for={this.props.docsId}></label>
          <div class="modal-inner">
            <label class="modal__close" for={this.props.docsId}></label>
            <h2>{this.props.docLabel}</h2>
            <p>{this.props.docDate}</p>
            <object data={this.props.docs} type="application/pdf" width="100%" height="89%"/>
          </div>
        </div>

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
            <object data={this.props.docs} type="application/pdf" width="100%" height="250px"/>
            <div className="col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn btn active" >
                <label>
                  <a href={this.props.docs} target="_blank">
                    View in a new tab.
                  </a>
                </label>
              </button>
              <button className="xl-6 l-6 m-6 s-6 xs-6 card-btn btn"  for={this.props.docsId}>
                <label>
                  View document
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPdf;