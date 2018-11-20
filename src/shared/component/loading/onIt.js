import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SidebarNew from '../sidebar/SidebarNew';
import SidebarProcessor from '../sidebar/SidebarNew';

class OnIt extends Component {

  render(){
    return(
      <div className="no-search-result flex f-center modal-body loading">
      <span className="spinner atom"></span>
      <br />
      <p className="font-white">Im on it!</p>
    </div>
    );
  }


}
   

    

export default OnIt;