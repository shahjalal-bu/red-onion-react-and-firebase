import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
        <PrivateRoute exact path="/cart">
          <Cart />
        </PrivateRoute> 
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
