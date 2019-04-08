import React, { Component } from "react";

import * as Ons from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import tabs, { TabPage } from "./tabs";

const renderTabs = () =>
  tabs.map(tab => ({
    content: (
      <TabPage
        key={tab.title}
        title={tab.title}
        id={tab.id}
        component={tab.component}
      />
    ),
    tab: <Ons.Tab key={tab.title} label={tab.title} />
  }));

const App = () => <Ons.Tabbar index={0} renderTabs={renderTabs} />;

export default App;
