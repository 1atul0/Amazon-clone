import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {auth} from './firebase.js'

function Login() {
  const[email,setEmail]=useState('');
  const[password,setpassword]=useState('');

  const signIn = e=> {
    e.preventDefault();

    //some firebasse signin  happeinging
  }

  const register= e=>{
    e.preventDefault();
    //do some firebase register
    auth
      .createUserWithEmailAndPassword(email,password)
    
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/220px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value) }/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setpassword(e.target.value)}/>

          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the <b>Amazon fake Clone</b> condition of use & sale. Please see out Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
