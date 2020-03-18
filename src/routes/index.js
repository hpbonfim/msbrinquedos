import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Inicio from '../pages/Inicio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="*"> <Redirect push to="/" /> </Route>
    </Switch>
  );
}