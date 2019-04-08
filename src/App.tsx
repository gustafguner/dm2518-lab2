import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import React, { Component } from "react";

import * as ons from "onsenui";
import * as Ons from "react-onsenui";

import Home from "./pages/Home";
import Page from "./pages";

interface Section {
  title: string;
}

const renderTabs = () => {
  const sections: Section[] = [
    {
      title: "About",
    },
    {
      title: "One",
    },
    {
      title: "Two",
    },
    {
      title: "Three",
    },
    {
      title: "List"
    }
  ];

  return sections.map((section: Section) => {
    return {
      content: <Page key={section.title} title={section.title} />,
      tab: <Ons.Tab key={section.title} label={section.title} />
    };
  });
}


const App = () => (
  <>
  <Ons.Navigator
    renderPage={(route, navigator) => {
      const props = route.props || {};
      props.navigator = navigator;

      return React.createElement(route.component, props);
    }}
    initialRoute={{ component: Home }}
  />
  <Ons.Tabbar 
    index={1}
    renderTabs={renderTabs}
    />
  </>
);

export default App;
