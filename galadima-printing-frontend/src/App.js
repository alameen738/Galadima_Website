import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/order" component={Order} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
