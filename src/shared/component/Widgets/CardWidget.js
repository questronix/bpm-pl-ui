import React, { Component } from 'react';

class CardWidget extends Component {
  render() {
    return (
      <div className="App">
        <div className={this.props.class}>
          <div className="flex-container flex-wrap ">
            <div className="col xl-6 l-6 m-6 s-6 xs-6 card-image">
              <img src="https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg"></img>
            </div>
            <div className="col xl-6 l-6 m-6 s-6 xs-6 card-info">
              <ul className="card-list no-padding">
                <h4 className="">
                  Jerome Patiga
                </h4>
                <li className="list-title">
                  <h4 className="no-padding no-margin">
                    Roles
                  </h4>
                </li>
                <li className="list-title">
                  item
                </li>
                <li className="list-title">
                  item
                </li>
                <li className="list-title">
                  item
                </li>
              </ul>
              <ul className="card-list no-padding">
                <li className="list-title">
                  <h4 className="no-padding no-margin">
                    Business rules
                  </h4>
                </li>
                <li className="list-title">
                  item
                </li>
                <li className="list-title">
                  item
                </li>
                <li className="list-title">
                  item
                </li>
              </ul>
            </div>
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

export default CardWidget;