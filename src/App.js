import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router-dom";
import * as createHistory from "history"

//components
import Homepage from './components/Homepage/Homepage';
import Paper from './components/Paper/Paper';
import Projects from './components/Projects/Projects';
import Research from './components/CurrentResearch/research';

//projects

import Quicklabel from './components/Projects/Quicklabel/quicklabel';
import Medical from './components/Projects/Medical/medical';
import Psychology from './components/Projects/Psychology/psychology';
import Voice from './components/Projects/VoiceAssistant/voice';

const history = createHistory.createBrowserHistory();
function App() {
  return (
    <div className="container">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/papers" component={Paper} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/research" component={Research} />

        <Route exact path="/projects/quicklabel" component={Quicklabel} />
        <Route exact path="/projects/medical" component={Medical} />
        <Route exact path="/projects/psychology" component={Psychology} />
        <Route exact path="/projects/voice" component={Voice} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
