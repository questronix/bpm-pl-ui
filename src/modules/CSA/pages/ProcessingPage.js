import React from 'react';
import EditTaskContainer from '../component/task/EditTaskContainer';
import ProcessorContainer from '../../Processor/component/processor/ProcessorContainer';
import Nav from '../component/nav/Nav';

const ProcessingPage = ({ history }) => {
  return (
    <div>
      <Nav /> 
      <div className="margin-top-70">
          <div className="flex-container flex-wrap">
            <div className="xl-2 l-2 m-3 s-3 xs-4 col no-padding"></div>
            <div className="xl-10 l-10 m-9 s-9 xs-8 col">
              <ProcessorContainer/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProcessingPage;