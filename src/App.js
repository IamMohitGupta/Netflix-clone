import React ,{useEffect} from "react";
import Homescreen from './Homescreen';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import {useDispatch , useSelector , Provider} from "react-redux";
import {login, logout, selectUser} from "./userSlice";
import SignUp from "./SignUp";
import Profilescreen from "./Profilescreen";

function App(){
   const user = {
    name:"m"
  }
  // const user = useSelector(selectUser);
  // const user = null;
  // const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged(userAuth => {
      if(userAuth != null){
        console.log(userAuth);
        // dispatch(login({
        //   uid:userAuth.uid,
        //   email:userAuth.email,
        // })
        // );
        <Homescreen/>
      }
      else{
        <SignUp />
        // dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);

 
  return (
    <div className="app">
      {/* <Homescreen /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
          <Route path="/profile">
          <Profilescreen/>
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
