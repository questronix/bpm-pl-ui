// TODO: FIX import

import React, { Component } from 'react';
// import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';
import { TaskService } from '../../../services/index';
import Nav from '../component/nav/Nav';
import CardImg from '../../../shared/component/Widgets/CardImg';
import Input from '../../../shared/component/input/Input';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

    this.handleSidebarTabClick = this.handleSidebarTabClick.bind(this);
  }

  handleSidebarTabClick(tab) {
    this.setState({
      tasks: [],
    });
    if (tab == 0) {
      this.getTasks();
    }
    else {
      this.getTaskHistory();
    }
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.getAllTasks(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });
  }

  getTaskHistory() {
    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.getAllTaskHistory(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });
  }

  render() {
    return (
      <div>
        <Nav />
        <SideBar tasks={this.state.tasks} onTabClick={this.handleSidebarTabClick} />
        {/* <Processor/> */}
        <div className="">
          <div className="flex-container flex-wrap">
            <div className="xl-2 col"></div>
            <div className="xl-10 col">
              <div className="xl-4">
                <CardImg
                  docLabel="This document"
                  docDate="12/31/18"
                  docs="https://images.unsplash.com/photo-1540349946389-8ea10a9da3cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73648bc8f9b4c8067106d4da017386ac&auto=format&fit=crop&w=634&q=80"
                  docsId="333" />
              </div>
              <div className="xl-12">
                <div className="box">
                  <div className="tab-title-container">
                    <div className="tab-title active">
                      <h4 className="circle">
                        1
                      </h4>
                      <h4>
                        Transactio Selection
                      </h4>
                      <span class="white"></span><span class="gray"></span>
                    </div>
                    <div className="tab-title">
                      <h4 className="circle">
                        1
                      </h4>
                      <h4>
                        Transactio Selection
                      </h4>
                      <span class="white"></span><span class="gray"></span>
                    </div>
                    <div className="tab-title">
                      <h4 className="circle">
                        1
                      </h4>
                      <h4>
                        Transactio Selection
                      </h4>
                      <span class="white"></span><span class="gray"></span>
                    </div>
                    <div className="tab-title">
                      <h4 className="circle">
                        1
                      </h4>
                      <h4>
                        Transactio Selection
                      </h4>

                    </div>
                  </div>
                  <div className="box-body">
                    <h3 className="box-header no-margin">
                      Policy Information
                    </h3>
                    <div className="container flex f-justify-evenly">
                      <Input />
                      <Input />
                      <Input />
                      <Input />
                      <Input />
                    </div>
                    <div className="flex f-end container">
                      <a href="#" className="text-with-icon">
                        Show more
                        &nbsp; <span className="fa fa-chevron-down"></span>
                      </a>
                    </div>
                    <hr />
                    <div className="box-header flex f-row f-justify-space-between">
                      <div className="flex-container">
                        <h4 className="no-margin">
                          Transaction type:
                        </h4>
                        <select>
                          <option>Reinstatement</option>
                        </select>
                      </div>
                      <div className="">
                        <h4 className="no-margin">
                          Transaction Number: 1022020
                        </h4>
                      </div>
                    </div>
                    <form className="flex f-justify-evenly container">
                      <div className="">
                        <input name="transaction" id="Updating" type="radio" />
                        <label for="Updating">
                          Updating
                         </label>
                      </div>
                      <div className="">
                        <input name="transaction" id="Redating" type="radio" />
                        <label for="Redating">
                          Redating
                        </label>
                      </div>
                      <div className="">
                        <input name="transaction" id="Waiver" type="radio" />
                        <label for="Waiver">
                          Waiver
                        </label>
                      </div>
                    </form>
                    <div class="transaction-checkboxes margin-auto">
                      <table border="0" cellspacing="0">
                        <tr>
                          <td><label for="health">Health Statement Form (HSF)</label></td>
                          <td><input id="health" type="checkbox" /></td>
                        </tr>
                        <tr>
                          <td><label for="routine">U/W routine requirements</label></td>
                          <td><input id="routine" type="checkbox" /></td>
                        </tr>
                        <tr>
                          <td><label for="payment">Payment of Premium Arrears</label></td>
                          <td><input id="payment" type="checkbox" /></td>
                        </tr>
                        <tr>
                          <td><label for="specimen">Specimen Signature Form (if applicable)</label></td>
                          <td><input id="specimen" type="checkbox" /></td>
                        </tr>
                        <tr>
                          <td><label for="valid">Valid Government Issued ID (if applicable)</label></td>
                          <td><input id="valid" type="checkbox" /></td>
                        </tr>
                        <tr>
                          <td><label for="non-government">Valid Non-Government Issued ID (if applicable)</label></td>
                          <td><input id="non-government" type="checkbox" /></td>
                        </tr>
                      </table>
                    </div>
                    <hr/>
                    <div className="flex f-end container">
                      <a href="#" className="btn bright-blue xl-2">
                        Additional Policy Information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}