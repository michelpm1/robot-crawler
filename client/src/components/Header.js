import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "gray"
  };

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark header-nav"}>
        <NavLink exact to="/" activeStyle={this.active}>
          Info
        </NavLink>
        <NavLink to="/scores" activeStyle={this.active}>
          Scores
        </NavLink>
      </nav>
    );
  }
}

export default Header;
