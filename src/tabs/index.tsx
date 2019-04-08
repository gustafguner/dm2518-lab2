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
  icon: string;
}

const tabs: Tab[] = [
  {
    title: "About",
    id: "about",
    component: About,
    icon: "md-pin-help"
  },
  {
    title: "Chocolate cake",
    id: "chocolate-cake",
    component: ChocolateCake,
    icon: "md-pizza"
  },
  {
    title: "Carrot cake",
    id: "carrot-cake",
    component: CarrrotCake,
    icon: "md-pizza"
  },
  {
    title: "Red velvet cake",
    id: "red-velvet-cake",
    component: RedVelvetCake,
    icon: "md-pizza"
  },
  {
    title: "List",
    id: "list",
    component: List,
    icon: "md-filter-list"
  }
];

export default tabs;

export { TabPage };
