import React, { Component } from 'react';
import PolicyInfoHeader from './PolicyInfoHeader';
import AgentInfoHeader from './AgentInfoHeader';

class TabHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {},
      visible: false
    }
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible(){
    this.setState({ visible: !this.state.visible})
  }

  render() {

    return (
      <div className="App">
        <div className="box-body">
          <div className={this.state.visible ? "policyinfo-container active" : "policyinfo-container"}>
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Policy Information
            </h2>
            </div>
            <PolicyInfoHeader  policy={this.props.policy} clients={this.props.clients}/>
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Agent Information
            </h2>
            </div>
            <AgentInfoHeader policy={this.props.policy} />
          </div>
          <div className="flex f-end showmore">
            <button className="btn alt text-with-icon container flex f-center" onClick={this.isVisible} accessKey="s">
              {this.state.visible ? (<>Show less&nbsp; <span className="fa fa-chevron-up"></span></>) : <>Show more&nbsp; <span className="fa fa-chevron-down"></span></>}
            </button>
          </div>
          <hr />
        </div>
      </div >
    );
  }
}

export default TabHeader;