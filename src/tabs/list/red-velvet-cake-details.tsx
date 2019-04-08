import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";

interface Props {
  navigator: any;
}

const RedVelvetCakeDetails: React.FC<Props> = ({ navigator }) => (
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
      <h1>Red velvet cake</h1>
      <img
        src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/02/red-velvet-cake-recipe.jpg"
        width="90%"
        alt="C A K E"
      />{" "}
      <br />
      <h2>Ingredients</h2>3 cups (345g) cake flour (spoon and leveled) <br />1
      teaspoon baking soda <br />2 Tablespoons (10g) unsweetened natural cocoa
      powder <br />
      1/2 teaspoon salt <br />
      1/2 cup (115g) unsalted butter, softened to room temperature <br />2 cups
      (400g) granulated sugar <br />1 cup (240ml) canola or vegetable oil <br />
      4 large eggs, room temperature and separated <br />1 Tablespoon pure
      vanilla extract <br />1 teaspoon distilled white vinegar <br />
      liquid or gel red food coloring 1 cup (240ml) buttermilk, at room
      temperature <br />
      <h2>Cream Cheese Frosting</h2>
      16 ounces (450g) full-fat block cream cheese, softened to room temperature{" "}
      <br />
      1/2 cup (115g) unsalted butter, softened to room temperature <br />4 and
      1/2 cups (540g) confectioners’ sugar <br />1 Tablespoon (15ml) heavy cream
      or milk <br />1 and 1/2 teaspoons pure vanilla extract pinch of salt, to
      taste <br />
    </p>
  </Ons.Page>
);

export default RedVelvetCakeDetails;
