import React, { Component } from 'react';
import moment from 'moment'
import './Issue.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, } from 'react-bootstrap'


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
