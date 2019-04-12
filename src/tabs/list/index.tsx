import * as React from "react";
import * as Ons from "react-onsenui";
import ChocolateCakeDetails from "./chocolate-cake-details";
import CarrotCakeDetails from "./carrot-cake-details";
import RedVelvetCakeDetails from "./red-velvet-cake-details";
import About from "./about";

const list = [
  {
    name: "Chocolate cake",
    component: ChocolateCakeDetails
  },
  {
    name: "Carrot cake",
    component: CarrotCakeDetails
  },
  {
    name: "Red velvet cake",
    component: RedVelvetCakeDetails
  }
];

interface ListComponentProps {
  navigator: any;
}

const List: React.FC<ListComponentProps> = ({ navigator }) => (
  <>
   <Ons.List>
   {list.map(item => (
     <Ons.ListItem tappable = {true}>
      <span
          onClick={() => {
            navigator.pushPage({ component: item.component });
          }}
        >
          {item.name}
        </span>
     </Ons.ListItem>
        
    ))}
   </Ons.List>
  

    <Ons.Button  modifier="large"
      onClick={() => {
        navigator.pushPage({ component: About });
      }}
    >
      About
    </Ons.Button>
  </>
);

export default List;
