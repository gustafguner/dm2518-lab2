import * as React from "react";
import * as Ons from "react-onsenui";

import AboutTab from "./about";

interface Props {
  title: string;
  id: string;
  component: React.ComponentType;
}

const TabPage: React.FC<Props> = ({ title, id, component }) => (
  <Ons.Page
    id={id}
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="center">{title}</div>
      </Ons.Toolbar>
    )}
  >
    {component}
  </Ons.Page>
);

interface Tab {
  title: string;
  id: string;
  component: any;
}

const tabs: Tab[] = [
  {
    title: "About",
    id: "about",
    component: <AboutTab />
  }
];

export default tabs;

export { TabPage, AboutTab };
