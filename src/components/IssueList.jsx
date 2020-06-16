import React, { Component } from 'react';
import './IssueList.css';
import Issue from './Issue.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, } from 'react-bootstrap'


export default class IssueList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(response => response.json())
      .then(data => { this.setState({ issues: data ? data : [] }) })
  }


  render() {
    return (
      <div className="IssueList" >
        {this.state.issue.map(issus => <Issue issue={issue} key={issue.id} />)}
      </div>
    );
  }
}

