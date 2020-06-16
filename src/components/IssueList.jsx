import React, { Component } from 'react';
import './IssueList.css';
import Issue from './Issue.jsx'


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
      .then(data => {
        this.setState({ issues: data ? data : [] });
        console.log(data);
      })
  }


  render() {
    return (
      <div className="IssueList" >
        {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)}
      </div>
    );
  }
}

