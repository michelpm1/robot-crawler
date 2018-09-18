import React from "react";
import { Route } from "react-router-dom";
import Info from "../components/Info";
import ScrapeScreen from "../components/ScrapeScreen";
import Header from "../components/Header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Info} />
        <Route path="/scrape" component={ScrapeScreen} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
