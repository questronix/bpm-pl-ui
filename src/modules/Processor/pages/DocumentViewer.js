import React, { Component } from 'react';
import Header from '../../../shared/component/header/Header';

class DocumentViewer extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="document-container">
          <div className="header">
            <h3 className="font-prulife">
              Document name here
            </h3>
          </div>
          <object data="http://www.pdf995.com/samples/pdf.pdf" type="application/pdf" width="100%" height="95%"/>
        </div>
      </div >
    );
  }
}

export default DocumentViewer;