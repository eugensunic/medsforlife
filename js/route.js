import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Home from './components/Home.js';
import Layout from './components/Layout.js';
import Statistic from './components/statisticscomponent/Statistic.js';
import Research from './components/researchcomponent/Research.js';
import Inputform from './components/inputcomponent/Inputform.js';
import Ppistarter from './components/ppistarter/Ppistarter.js';
import Faq from './components/faq/Faq.js';
import About from './components/about/Main.js';
import Notfound from './components/notfound/Notfound.js';
import Patientpost from './components/Patientpost.js';
import Pharmapost from './components/Pharmapost.js';
import Doctorpost from './components/Doctorpost.js';
import Overview from './components/overviewcomponent/Overview.js';

export const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={Layout} />
    <Route path="/statistics" component={Statistic} />
    <Route path="/research" component={Research} />
    <Route path="/form" component={Inputform} />
    <Route path="/tips" component={Ppistarter} />
    <Route path="/faq" component={Faq} />
    <Route path="/about" component={About} />
    <Route path="/overview" component={Overview} />
    <Route component={Notfound} />
  </Switch>
);
