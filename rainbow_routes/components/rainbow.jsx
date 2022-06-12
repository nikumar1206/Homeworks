import React from "react";
import { Route, NavLink, NavNavLink } from "react-router-dom";

import Red from "./red";
import Green from "./green";
import Blue from "./blue";
import Violet from "./violet";
import Orange from "./orange";
import Yellow from "./yellow";

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/blue" component={Blue} />
        <Route path="/violet" component={Violet} />

        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink to="/blue">Blue</NavLink>
        <NavLink to="/violet">Violet</NavLink>

        <div id="rainbow">{/* Your routes should go here */}</div>
      </div>
    );
  }
}

export default Rainbow;
