import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages';


function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(resp => {
      setPizzas(resp.data.pizzas)
    })
  }, [])


  return (  
    <div className="wrapper">
      <Header />
      <div className="content" >
        <Route path="/" exact render={() => <Home items={pizzas} />} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
