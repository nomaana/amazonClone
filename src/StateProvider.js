// setup data layer
// we need this to tack the basket
import { Filter } from "@material-ui/icons";
import React, { createContext, useContext, useReducer } from "react";
// this is the data layes
export const StateContext = createContext();
// BIILS THE PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use  the inside the component
export const useStateValue = () => useContext(StateContext);

const courses = ["demo", "test", "rhul"];
const [c1, c2, c3] = courses;
console.log(courses);

function add({ num1 = 20, num2, num3 }) {}

add({ num2: 20, num3: 30 });

function Flite(airline, fliteNumber) {
  this.airline = airline;
  this.fliteNumber = fliteNumber;
  this.display = function () {
    console.log(this.airline);
    console.log(this.fliteNumber);
  };
}

var flight1 = new Flite("nomaan", "akhtar");
flight1.display();
