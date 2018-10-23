import React from 'react';

const CreateRole = (props) => {
  return (
    <div className="col xl-3 no-padding">
      <div className="flex-container flex-wrap">
        <div className="card-alt xl-12">
          <div className="card-header">
            <h3>
              Create role
            </h3>
          </div>
          <div className="card-body create-role">
            <div className="">
              <label className="">
                <h4>
                  Role name
                </h4>
              </label>
              <input
                type="text"
                className="col input custom-input"
                placeholder="What role do you want to make? "
                width="100" />
            </div>
            <div className="">
              <label className="">
                <h4>
                  Role description
                </h4>
              </label>
              <textarea
                className="textarea custom-textarea" placeholder="What doeas your role do?" />
            </div>
            <div className="flex-container">
              <button className="round-btn gray">
                <span className="fa fa-plus"></span>
              </button>
              <p className="flex f-center font-gray">
                Assign this role
              </p>
            </div>
            <div className="flex f-end">
              <button className="btn prulife">
                Create Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRole;