import React from 'react';

const RoleList = (props) => {
  return (
    <div className="col xl-9 no-padding">
      <div className="flex-container flex-wrap">
        <div className="card-alt xl-11">
          <div className="card-header">
            <h3>
              Role List ({props.roles.length})
            </h3>
          </div>
          <div className="card-body no-padding">
            <ul className="compact-list">
              {props.roles.map((role) => {
                return(
                   <li className="compact-item">
                <a href="#">
                  <h4 className="">
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
};

export default RoleList;