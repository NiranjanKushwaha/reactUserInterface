import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './Components/DetailsPage.jsx';
import Users from "./Components/Users.jsx"

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/users/:id" component={DetailsPage} exact />
    </Switch>
  )
}

export default App;