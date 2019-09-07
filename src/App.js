import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage'
import Adopt from './adopt/adopt'
import AdoptedList from './adoptedList/adoptedList'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/adopt" component={Adopt} /> 
          <Route path="/adopted" component={AdoptedList} />                 
        </Switch>

      </div>
    );
  }
}

export default App;
