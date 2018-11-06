import React, { Component } from 'react';

class CheckListItem extends Component {
  constructor(props) {
    super(props);

    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange(e) {
    this.props.onCheck(e.target.id);
  }

  render() {
    const checkItemList = this.props.list.map((item, index) => (
      <li key={index}>
        <input
          id={index}
          type="checkbox"
          checked={item.value}
          value={item.value}
          onChange={this.handleCheckChange}
        />
        {item.label}
      </li>
    ));

    return <ul>{checkItemList}</ul>;
  }
}

export default CheckListItem;
