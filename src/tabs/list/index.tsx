import * as React from "react";
import * as Ons from "react-onsenui";
import Details from "./details";

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

interface ListComponentProps {
  navigator: any;
}

const List: React.FC<ListComponentProps> = ({ navigator }) => (
  <Ons.Page>
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

export default List;
