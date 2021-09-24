import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import RedUrl from './components/RedUrl'

function App() {

  return (
    <Router>
      <Switch>
{/* http://localhost:4000/api */}
        <Route exact path="/api/"
          component={Home}
         />
         <Route exact path="/api/:url"
        component={RedUrl}
         />

      </Switch>
    </Router>
  );
}

export default App;