import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";

interface Props {
  navigator: any;
}

const CarrotCakeDetails: React.FC<Props> = ({ navigator }) => (
  <Ons.Page
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="left">
          <Ons.BackButton>Back</Ons.BackButton>
        </div>
        <div className="center">Carrot Cake</div>
      </Ons.Toolbar>
    )}
  >
    <p>
      {" "}
      <h1>Carrrot Cake</h1>
      <h2>Ingredients</h2>
      <img
        src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/classic_carrot_cake_08513_16x9.jpg"
        width="90%"
        alt="C A K E"
      />{" "}
      <br />4 eggs. <br />1 1/4 cups vegetable oil. <br />2 cups white sugar.{" "}
      <br />2 teaspoons vanilla extract. <br />2 cups all-purpose flour. <br />2
      teaspoons baking soda. <br />2 teaspoons baking powder. <br />
      1/2 teaspoon salt.
      <br />
    </p>
  </Ons.Page>
);

export default CarrotCakeDetails;
