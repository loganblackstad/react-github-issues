import React, { Component } from 'react';
import './Issue.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, } from 'react-bootstrap'


class Issue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      editMe: [],
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Github Issues</h1>
        </header>

      </div>
    );
  }
}

export default App;
