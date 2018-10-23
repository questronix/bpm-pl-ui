// TODO: FIX import

import React, {Component} from 'react';
import links from '../routes';
import Nav from '../../../shared/component/nav/Nav';
import RoleContainer from '../component/admin/roleContainer';

export default class RolePage extends Component {
  render() {
    return (
      <div>
        <Nav links={links}/>
        <RoleContainer/>
      </div>
    );
  }
}