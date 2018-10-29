import React, { Component } from 'react';
import PolicyContainer from '../policy/PolicyContainer';

class EditTaskContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      id: '',
    }
  }
  
  componentDidMount() {
    console.log('PROPS ---------------------------------', this.props.location);
    this.setState({
      id: this.getQueryStringValue("id")
    });
  }

  getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  

  render() {
    return(
      <div>
        <PolicyContainer /> 
      </div>
    );
  }
}

export default EditTaskContainer;