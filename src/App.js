import React, { Component } from 'react';
import  {Home} from './Home';
import  Login from './Login';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
          <div>
              <Route exact path="/home" component={Home}/>
              <Route path="/" component={Login}/>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;