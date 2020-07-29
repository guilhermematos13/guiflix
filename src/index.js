import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';



ReactDOM.render(
  <BrowserRouter>
   <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (<div>Pagina404</div>)} />
   </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
