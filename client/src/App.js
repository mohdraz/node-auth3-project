import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/LogIn.js";
import AdminDash from "./components/admin/adminDash.js";
import memberDash from "./components/member/memberDash";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Role Bases User Login</p>
        </header>
      </Link>

      <main className="container">
        <Route exact path="/" component={Login} />
        <Switch>
          <Route exact path="/admin" component={AdminDash} />
          <Route exact path="/member" component={memberDash} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
