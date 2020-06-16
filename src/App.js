import React, { useState } from 'react';
import './App.css';
import IssueList from './components/IssueList';


function App() {
  const [count, setCount] = useState(0);
  const [boop, setBoop] = useState(0);


  return (
    <>
      <div className="hooks-div">
        <p>You clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <br />
        <p>You booped the snoot {boop} times.</p>
        <button onClick={() => setBoop(boop + 1)}>Click Me!</button>
      </div>
      <br />

      <div className="App">
        <IssueList />
      </div>
    </>
  );
}

export default App;