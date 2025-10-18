import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lessons" component={Lessons} />
      </Switch>
    </Router>
  );
};

export default App;