import React, {Component} from 'react';

class RoleList extends Component{
  constructor(props) {
    super(props);

    this.state= {
      name: this.props.roles.name,
      isInEditMode:false,
      
      
    }

  }

  render(){
    return (
      <div className="col xl-9 no-padding">
        <div className="flex-container flex-wrap">
          <div className="card-alt xl-11">
            <div className="card-header">
              <h3>
                Role List ({this.props.roles.length})
              </h3>
            </div>
            <div className="card-body no-padding" >
              <ul className="compact-list">
                {this.props.roles.map((role) => {
                  return(
                     <li className="compact-item">
                  <a href="#" >
                    <h4 className="" onDoubleClick={() => alert("sample")}>
                      {role.name}
                    </h4>
                    <ul className="flex-container flex-wrap">
                      <li className="col no-padding xl-10">
                        {role.description}
                      </li>
                      <li> </li>
                    </ul>
                  </a>
                </li>
                )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoleList;