import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";
import { PageProps } from "./types";
import Details from "./Details";

const list = [
  {
    name: "Gustaf"
  },
  {
    name: "Jakob"
  },
  {
    name: "Lorem"
  },
  {
    name: "About"
  }
];

const Home: React.FC<PageProps> = ({ navigator }) => (
  <Ons.Page
    id="list"
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="center">Home</div>
      </Ons.Toolbar>
    )}
  >
    {list.map(item => (
      <Ons.Card key={item.name}>
        <span
          onClick={() => {
            navigator.pushPage({ component: Details });
          }}
        >
          {item.name}
        </span>
      </Ons.Card>
    ))}
  </Ons.Page>
);

export default Home;
