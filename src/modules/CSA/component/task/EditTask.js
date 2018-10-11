import React, { Component } from 'react';
import { TaskService } from '../../services';
import PolicyContainer from '../policy/PolicyContainer';

class EditTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      id: '',
    }
  }
  
  componentDidMount() {
    this.setState({
      id: this.getQueryStringValue("id")
    });
    // const username = sessionStorage.getItem('username');
    // TaskService.getAllTasks(username).then((res) => {
    //   console.log(res.data);
    //   this.setState({
    //     tasks: res.data
    //   })
    // }).finally(() => {
      
    // });
  }

  getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  

  render() {
    // console.log("YAAAY", this.state.tasks);
    return(
      <PolicyContainer />
    );
  }
}

export default EditTask;