import React from "react";
import { Route } from "react-router-dom";
import Info from "../components/Info";
import Scores from "../components/Scores";
import Header from "../components/Header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Info} />
        <Route  path="/scores" component={Scores} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
