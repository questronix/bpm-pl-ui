import React, { Component } from 'react';
import SearchAndAdd from '../../../../shared/component/search-and-add/SearchAndAdd';
import RoleList from './roleList';
import CreateRole from './createRole';
import { RoleService } from '../../services';

class RoleContainer extends Component {
  constructor(props) {
    super(props);

    this.state= {
      data: []
      
    }

    this.handleCreateRole = this.handleCreateRole.bind(this);
  }

  componentDidMount() {
    RoleService.getAllRoles()
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data
        })
      })
      .finally(() => {
        // Do something
      });
  }

  handleCreateRole(role) {
    RoleService.createNewRole(role)
      .then((res)=>{
      console.log(res.data); 
      const roles = this.state.data;
      roles.push(role);
      this.setState({
        data: role
      
    }) 
      })
    .finally(() => {
    
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
