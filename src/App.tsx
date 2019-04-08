import React, { Component } from "react";

import * as Ons from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import tabs, { TabPage } from "./tabs";

interface TabRootProps {
  navigator: any;
}

const TabRoot: React.FC<TabRootProps> = ({ navigator }) => (
  <Ons.Page>
    <Ons.Tabbar
      index={0}
      renderTabs={() =>
        tabs.map(tab => ({
          content: (
            <TabPage
              key={tab.title}
              title={tab.title}
              id={tab.id}
              navigator={navigator}
              component={tab.component}
            />
          ),
          tab: <Ons.Tab key={tab.title} label={tab.title} />
        }))
      }
    />
  </Ons.Page>
);

const App = () => (
  <Ons.Navigator
    initialRoute={{ component: TabRoot }}
    renderPage={(route, navigator) => {
      const props = route.props || {};
      props.navigator = navigator;

      return React.createElement(route.component, props);
    }}
  />
);

export default App;
