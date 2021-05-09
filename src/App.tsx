import React from "react";
import Login from "./pages/login/components/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
