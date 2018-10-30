import React, {Component} from 'react';

class CreateRole extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;


    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    // console.log(this.state);
    this.props.onCreateRole(this.state);
  }
 
  render(){
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
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
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
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                className="textarea custom-textarea" 
                placeholder="What doeas your role do?" />
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
              <button onClick={this.handleSubmit} className="btn prulife" type="submit">
                Create Role
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>

  )
  }

}
export default CreateRole;  