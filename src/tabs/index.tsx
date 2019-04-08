import * as React from "react";
import * as Ons from "react-onsenui";

import About from "./about";
import ChocolateCake from "./chocolate-cake";
import CarrrotCake from "./carrot-cake";
import RedVelvetCake from "./red-velvet-cake";
import List from "./list";

interface Props {
  title: string;
  id: string;
  navigator: any;
  component: React.ComponentType;
}

const TabPage: React.FC<Props> = ({ title, id, navigator, component }) => {
  const Component: any = component;
  return (
    <Ons.Page
      id={id}
      renderToolbar={() => (
        <Ons.Toolbar>
          <div className="center">{title}</div>
        </Ons.Toolbar>
      )}
    >
      <Component navigator={navigator} />
    </Ons.Page>
  );
};

interface Tab {
  title: string;
  id: string;
  component: any;
}

const tabs: Tab[] = [
  {
    title: "About",
    id: "about",
    component: About
  },
  {
    title: "Chocolate cake",
    id: "chocolate-cake",
    component: ChocolateCake
  },
  {
    title: "Carrot cake",
    id: "carrot-cake",
    component: CarrrotCake
  },
  {
    title: "Red velvet cake",
    id: "red-velvet-cake",
    component: RedVelvetCake
  },
  {
    title: "List",
    id: "list",
    component: List
  }
];

export default tabs;

export { TabPage };
