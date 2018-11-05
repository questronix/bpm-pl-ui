import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e) {
    this.setState({ activeTab: e.target.attributes['name'].value });
  }

  render() {
    return (
      <div className="tab">
        <div className="tab-list">
          {this.props.children.map((child, key) => (
            <div
              className="tab-list-item active"
              name={child.props.label}
              key={key}
              onClick={this.handleTabClick}
            >
              {child.props.label}
            </div>
          ))}
        </div>
        <div className="tab-body">
          {this.props.children.find(
            component => component.props.label === this.state.activeTab
          )}
        </div>
      </div>
    );
  }
}

export default Tab;

// EXAMPLE USAGE
{
  /* <Tab>
  <div label="Tab1">
    <p>Tab 1 content here</p>
  </div>
  <div label="Tab2">
    <p>Tab 2 content here</p>
  </div>
  <div label="Tab3">
    <p>Tab 3 content here</p>
  </div>
  <div label="Tab4">
    <p>Tab 4 content here</p>
  </div>
  <div label="Tab5">
    <p>Tab 5 content here</p>
  </div>
</Tab> */
}
