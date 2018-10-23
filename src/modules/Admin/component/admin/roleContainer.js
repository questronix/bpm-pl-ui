import React, { Component } from 'react';
import SearchAndAdd from '../../../../shared/component/search-and-add/SearchAndAdd';
import RoleList from './roleList';
import CreateRole from './createRole';

class RoleContainer extends Component {
  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col no-paddding xl-10 l-10 m-10 s-12 xs-10 margin-auto">
          <h1 className="font-prulife flex s-f-center xs-f-center margin-top-90">Role Management</h1>
          <div className="flex-container flex-wrap">
            <RoleList />
            <CreateRole />
          </div>
        </div>
      </div>
    );
  }
}

export default RoleContainer;

