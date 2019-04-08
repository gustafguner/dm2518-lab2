import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import React, { Component } from "react";

import * as ons from "onsenui";
import * as Ons from "react-onsenui";

import Home from "./pages/Home";

const App = () => (
  <Ons.Navigator
    renderPage={(route, navigator) => {
      const props = route.props || {};
      props.navigator = navigator;

      return React.createElement(route.component, props);
    }}
    initialRoute={{ component: Home }}
  />
);

export default App;
