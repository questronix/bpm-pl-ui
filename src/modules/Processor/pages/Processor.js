// TODO: FIX import

import React, {Component} from 'react';
import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';
import Processor from '../component/processor/ProcessorContainer';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/> <SideBar/> 
        <Processor/>
      </div>
    );
  }
}