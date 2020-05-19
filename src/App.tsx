import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Game } from './Game';

import './App.css';

function App() {
  return (
    <Router >
      <Route path="/story/:storyId">
        <Game />
      </Route>

    </Router>
  );
}

export default App;
