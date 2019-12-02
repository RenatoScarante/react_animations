import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Animations from '../components/Animations';
import ReactAnimations from '../components/ReactAnimations';
import ScrollAnimation from '../components/ScrollAnimation';
import ReactReveal from '../components/ReactReveal';
import ReactTransitionGroup from '../components/ReactTransitionGroup'

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Animations} />
        <Route path="/animations" exact={true} component={Animations} />
        <Route path="/animations/react-animations" component={ReactAnimations} />
        <Route path="/animations/react-reveal" component={ReactReveal} />
        <Route path="/animations/react-transition-group" component={ReactTransitionGroup} />
        <Route path="/animations/scroll-animation" component={ScrollAnimation} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
