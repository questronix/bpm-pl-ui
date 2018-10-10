// TODO: FIX import

import React, {Component} from 'react';
import Policy from '../component/policy/Policy';
import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/> <SideBar/> <Policy/>
      </div>
    );
  }
}