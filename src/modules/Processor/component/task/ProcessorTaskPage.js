import React from 'react';
import Nav from '../nav/Nav';
import ProcessorTaskContainer from './ProcessorTaskContainer';
import SidebarNew from '../../../../shared/component/sidebar/SidebarNew';

const ProcessorTaskPage = ({history}) => {
  return (
    <div>
      <Nav /> 
      {/* <SidebarNew/> */}
      <ProcessorTaskContainer history={history}/>
    </div>
  );
};

export default ProcessorTaskPage;