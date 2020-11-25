import React, { useEffect, useState } from 'react';
import './App.css';
import { firebaseDB, userRef } from './firebase';
import signUp from './api/signUp';
import SignUp from "./components/SignUp";
import signIn from './api/signIn';
import SignIn from "./components/SignIn";
import Menu from './components/Menu';
import Navbar from './components/Recuring/Navbar';

function App() {
  const [stage, setStage] = useState('');
  const [signUpSignIn, setSignUpSignIn] = useState("SI");

  useEffect(() => {
    firebaseDB.auth().onAuthStateChanged(function (user) {
      if (user) {
        // user is signed in
        console.log(user.uid);
        setStage("loggedIn");
        setSignUpSignIn("SI")
      } else {
        // no user is signed in
        console.log("No user logged in");
        setStage("notLoggedIn");
      }
    });
  }, []);

  const changeState = (value) => {
    // states are SI -> Sign In or SU -> Sign Up
    setSignUpSignIn(value)
  }

  return (
    <div className="App">
      <Navbar stage={stage} />
      {stage === 'loggedIn' && <Menu />}
      {stage === 'notLoggedIn' && signUpSignIn === 'SI' && <SignIn changeState={changeState} />}
      {stage === 'notLoggedIn' && signUpSignIn === 'SU' && <SignUp changeState={changeState} />}
    </div>
  );
}

export default App;
