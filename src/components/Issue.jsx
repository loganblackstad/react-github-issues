import React, { Component } from 'react';
import moment from 'moment'
import './Issue.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, } from 'react-bootstrap'


function getUserLink(user) {
  return <a href={user.url}>{user.login}</a>
}

function getRelativeTime(time) {
  return moment.utc(time).fromNow();
}


function getMetaFragment(issue) {
  const { number, state, created_at, closed_at, user } = issue;

  if (state === 'open') {
    return <>#{ number} opened { getRelativeTime(created_at)} by { getUserLink(user)}</>;
  } else {
    return <>#{ number} was closed by { getUserLink(user)} {getRelativeTime(closed_at)}</>
  }
}

function Issue(props) {
  const { issue } = props;

  return (
    <div className="Issue" >
      <div className="Issue__icon"></div>
      <div className="Issue__details">
        <p>Issue</p>

      </div>

    </div>
  );
}
}
