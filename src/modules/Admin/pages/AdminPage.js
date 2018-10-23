// TODO: FIX import

import React, {Component} from 'react';
import links from '../routes';
import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';
import Processor from '../component/admin/adminContainer';

export default class AdminPage extends Component {
  render() {
    return (
      <div>
        <Nav links={links}/>
        <Processor/>
      </div>
    );
  }
}