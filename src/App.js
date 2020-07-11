import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'


import { Header } from './components'
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas'


// function App() {

//   useEffect(() => {
//     axios.get('/db.json').then(resp => {
//       setPizzas(resp.data.pizzas)
//     })
//   }, [])


//   return ;
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('/db.json').then(({data}) => {
      console.log({data})
      this.props.onSetPizzas(data.pizzas)
      // setPizzas(resp.data.pizzas)
    })
  }

  

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content" >
          <Route path="/" exact render={() => <Home items={this.props.items} />} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    items: state.pizzas.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSetPizzas: pizzas => {
      dispatch(setPizzas(pizzas))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
