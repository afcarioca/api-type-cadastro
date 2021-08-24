import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Cadastro } from './components/Cadastro';


const App =  () =>(
  <Router>
          <Switch>
            <Route exact path="/" component={Cadastro} />
          </Switch>
    </Router>
  );
    

export default App;
