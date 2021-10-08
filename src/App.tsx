import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Cadastro } from './components/Cadastro';
import { Perfil } from './components/Perfil';



const App =  () =>(
  <Router>
          <Switch>
            <Route exact path="/" component={Cadastro} />
            <Route path="/perfil" component={Perfil} />
          </Switch>
    </Router>
  );
    

export default App;
