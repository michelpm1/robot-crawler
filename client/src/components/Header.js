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
        <NavLink to="/scrape" activeStyle={this.active}>
          Scrape
        </NavLink>
      </nav>
    );
  }
}

export default Header;
