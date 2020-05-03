import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

// import Homepage from './Pages/homepage/Homepage'

const Homepage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>Homepage</h1>
    </div>
  );
}

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topics List</h1>
      <Link to={`${props.match.url}/13`}>TO 13</Link>
      <Link to={`${props.match.url}/16`}>TO 16</Link>
      <Link to={`${props.match.url}/ `}>TO 19</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topics Detail { props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
