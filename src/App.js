import React, {useState} from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Navigation from './Components/elements/Navigation';
import Header from './Components/elements/Header';
import PizzaForm from './Components/PizzaForm';

export default function App() {
  return (
    <div className='App'>
      <Navigation />

      <Switch> 
        
        <Route path="/order-pizza">
          <PizzaForm />;
        </Route>
        <Route 
        path="order-pizza" 
        render={props => {
          return null
        }}
        />
        <Route path="/" />

      </Switch>
      
    </div>
    
  );
};

