import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/modules/Home';
import Posts from '../src/modules/post/components/Posts';
import './App.css';

function App() {
  return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/comments">Comments</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
