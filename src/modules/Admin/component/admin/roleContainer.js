import React, { Component } from 'react';
import SearchAndAdd from '../../../../shared/component/search-and-add/SearchAndAdd';
import RoleList from './roleList';
import CreateRole from './createRole';

class RoleContainer extends Component {
  constructor(props) {
    super(props);

    this.state= {
      data: [
        {
          "roleTitle":"CSA",
          "roleDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel neque purus. Phasellus placerat, nisl ut sagittis hendrerit, erat enim semper neque, at elementum tellus metus at neque",
          "memberCount" : 10
        }, {
          "roleTitle":"Processor",
          "roleDescription": "Etiam quam nulla, fringilla nec ex at, eleifend",
          "memberCount" : 12

        }, {
          "roleTitle":"Admin",
          "roleDescription": "Sed iaculis nec tortor sed venenatis. Mauris vehicula justo lacus",
          "memberCount" : 6 
      }]
    }

    this.handleCreateRole = this.handleCreateRole.bind(this);
  }

  handleCreateRole(role) {
    console.log(role);  
    const roles = this.state.data;
    roles.push(role);
    this.setState({
      data: roles
    });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col no-paddding xl-10 l-10 m-10 s-12 xs-10 margin-auto">
          <h1 className="font-prulife flex s-f-center xs-f-center margin-top-90">Role Management</h1>
          <div className="flex-container flex-wrap">
            <RoleList roles={this.state.data}/>
            <CreateRole onCreateRole={this.handleCreateRole} create={this.state.data} />
          </div>
        </div>
      </div>  
    );
  }
}

export default RoleContainer;

