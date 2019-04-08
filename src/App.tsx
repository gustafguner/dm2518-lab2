import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import React, { Component } from "react";
import "./App.css";

import * as ons from "onsenui";
import * as Ons from "react-onsenui";

const handleClick = () => {
  ons.notification.alert("Hello world!");
};

const App = () => (
  <Ons.Page>
    <Ons.Button
      onClick={() => {
        handleClick();
      }}
    >
      Tap me!
    </Ons.Button>
  </Ons.Page>
);

export default App;
