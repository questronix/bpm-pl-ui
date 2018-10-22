import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import CardPdf from '../../../../shared/component/Widgets/CardPdf';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    TaskService.createNewTask({ username: sessionStorage.getItem('username') }).then((res) => {
      window.location.href = "/csa";
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="flex-container flex-wrap f-center flex">
        {/* <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div> */}
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <div className="col xl-12 l-12 m-12 s-12 xs-12">
            <h1 className="font-prulife flex s-f-center xs-f-center">Dashboard</h1>
            <button className="btn prulife" onClick={this.createTask}>Create Task</button>
            <h3 className="flex s-f-center xs-f-center">Welcome back, {JSON.parse(sessionStorage.getItem('user_info')).firstName}.</h3>
          </div>
          {/* <div className="col xl-12 flex-container flex-wrap">
              <TaskCounter
              overallTask="400"
              taskDone="230"/>
          </div>
          <div className="flex-container flex-wrap col xl-12">
            <div class="xl-4">
              <CardImg
                docLabel="Image viewer"
                docDate="10/21/65"
                docsId="1"
                docs="https://images.unsplash.com/photo-1539390883795-879e525ed42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=476900921f662de29dff8ff9b8273449&auto=format&fit=crop&w=634&q=80" />
            </div>
            <div class="xl-4">
              <CardImg
                docLabel="Another image sample"
                docDate="31/12/96"
                docsId="2"
                docs="https://images.unsplash.com/photo-1539487759015-f02dd1a33d6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=388b019f0784ddee894a2db97cdc840e&auto=format&fit=crop&w=564&q=80" />
            </div>
            <div class="xl-4">
              <CardImg
                docLabel="Image sample but not long"
                docDate="10/10/10"
                docsId="3"
                docs="https://images.unsplash.com/photo-1539485265931-3c0544d08430?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08e3485473dd9ac01241098ce6d945af&auto=format&fit=crop&w=1500&q=80" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardImg
                docLabel="Image sample but not long"
                docDate="10/10/10"
                docsId="3"
                docs="https://images.unsplash.com/photo-1539485265931-3c0544d08430?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08e3485473dd9ac01241098ce6d945af&auto=format&fit=crop&w=1500&q=80" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardImg
                docLabel="Image sample but not long"
                docDate="10/10/10"
                docsId="3"
                docs="https://images.unsplash.com/photo-1539485265931-3c0544d08430?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08e3485473dd9ac01241098ce6d945af&auto=format&fit=crop&w=1500&q=80" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardImg
                docLabel="Image sample but not long"
                docDate="10/10/10"
                docsId="3"
                docs="https://images.unsplash.com/photo-1539485265931-3c0544d08430?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08e3485473dd9ac01241098ce6d945af&auto=format&fit=crop&w=1500&q=80" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div class="xl-4">
              <CardPdf
                class="xl-12"
                docLabel="Doc name"
                docDate="10/10/10"
                docsId="10"
                docs="http://www.pdf995.com/samples/pdf.pdf" />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default DashboardContainer;