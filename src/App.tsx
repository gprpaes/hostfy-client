import React from "react";
import Login from "./pages/login/components/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Admin from "./pages/admin/components/Admin";
import Bedroom from "./pages/bedroom/Bedroom"
import Reservation from "./pages/reservation/Reservation"
function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/bedroom">
          <Bedroom />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
