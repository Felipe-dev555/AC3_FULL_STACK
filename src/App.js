import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Veiculos from './Veiculos';
import './style.css'

function App() {
  return (
      <>
      <header className="App-header">
        <p> <Link to='/home'>HOME</Link></p>
        <p><Link to='/veiculos'>Tipos de Carros</Link></p>
      </header>

      <main>
        <Switch>
          <Route path='/home' component= {Home}/>
          <Route path='/veiculos' component= {Veiculos}/>
        </Switch>
      </main>
      </>

  );
}

export default App;
