// TODO: FIX import

import React, {Component} from 'react';
import Policy from '../../../modules/policy/component/Policy';
import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <SideBar/>
        <Policy/>
      </div>
    );
  }
}

export default Main;