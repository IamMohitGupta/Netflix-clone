import React from "react";
import Homescreen from './Homescreen';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App(){
  // const user = {
  //   name:"m"
  // }
  const user = null;
  return (
    <div className="app">
      {/* <Homescreen /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
        <Route path="/test">
          <h2>Hello</h2>
          </Route>
          <Route exact path="/">
          <Homescreen />
          </Route>
        </Switch>
        )}
        
    </Router>
    </div>
  )
}

export default App;
