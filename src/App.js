import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { Home } from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  //  USEEFFECT>>>  PICES OF CODE WHICH RUN ON THE GIVEN CONDUCTION

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // any cleanup opration go in here
      unsubscribe();
    };
  }, []);
  console.log("user>>>>", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          {/* this is the default route */}
          <Route path="/">
            <Header />
            <Home />
            {/* <h1>home page</h1> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
