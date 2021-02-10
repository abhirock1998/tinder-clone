import React from "react";
import TinderCards from "./TindeCards";
import "./App.css";
import Header from "./Header";
import BottomButtons from "./BottomButtons";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./router";
import Login from "./Login";
import  { auth, provider } from "./firebase";
import Message from "./Message";
import Chat from "./Chat";

import { useDataLayerValue } from "./data-layer";
function App() {
  const [{ user }, dispatch] = useDataLayerValue();



  const press = async () => {
    await auth
      .signInWithPopup(provider)
      .then((user) => {
        if (user !== null || user !== undefined) {
          dispatch({ type: "SET_USER", user: user.user });
        }
      })
      .catch((e) => alert("Error in Auth with Google", e.message));
  };
 
  const start = (e) => {
    dispatch({ type: "SET_PERSON", person: e });
  };
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute
            loggedInPath="/home"
            path="/personalChat/:person"
            user={user}
          >
            <Chat user={user} />
          </ProtectedRoute>
          <ProtectedRoute loggedInPath="/home" path="/chatScreen" user={user}>
            <Message start={start} user={user} />
          </ProtectedRoute>
          <ProtectedRoute loggedInPath="/home" path="/home" user={user}>
            <TinderCards user={user} />
            <BottomButtons />
          </ProtectedRoute>
          <IsUserRedirect path="/" loggedInPath="/home" user={user}>
            <Login press={press} />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
