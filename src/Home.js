import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Seja Bem Vindo a Loja de Carros de Luxo!</h1>
      <p>Oferecemos Carros 0km</p>
      <nav>
        <ul>
          <li>
            <Link to="/carros">Tipos de Carros</Link>
          </li>
        </ul>
      </nav>
  

    </div>
  );
}

export default Home;