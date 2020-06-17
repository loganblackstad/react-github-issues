import React, { useState } from 'react';
import './App.css';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetails';
// import Users from './components/User'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  const [boop, setBoop] = useState(0);



  const NoMatch = ({ location }) => {
    return (
      <div>
        <h3>404: Page not found: {location.pathname}</h3>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IssueList} />
          <Route path="/issue/:issueNumber" component={IssueDetail} />
          {/* <Route path="/users" component={Users} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>

      <div className="hooks-div">
        <p>You clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <br />
        <p>You booped the snoot {boop} times.</p>
        <button onClick={() => setBoop(boop + 1)}>Click Me!</button>
      </div>
      <br />
    </BrowserRouter >
  );
}

export default App;