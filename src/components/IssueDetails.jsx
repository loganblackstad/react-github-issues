import React, { Component } from 'react';
import Issue from './Issue.jsx'
import moment from 'moment';
import ReactMarkdown from "react-markdown/with-html";
import 'bootstrap/dist/css/bootstrap.css'


export default class IssueDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      loading: true,
    }
  }

  componentDidMount() {
    const issueNumber = this.props.match.params.issueNumber;
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ detail: data, loading: false });
        console.log(data);
      })
  }


  render() {

    if (this.state.loading) {
      return <span>Loading Issue...</span>
    }

    const { title, number, user, updated_at, comments, body } = this.state.detail;

    moment().format();

    return (
      <div className="IssueDetail" >
        <ReactMarkdown source={body} escapeHtml={false} />
        {/* {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)} */}
      </div>
    );
  }
}

