import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";

interface Props {
  navigator: any;
}

const About: React.FC<Props> = ({ navigator }) => (
  <Ons.Page
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="left">
          <Ons.BackButton>Back</Ons.BackButton>
        </div>
        <div className="center">About</div>
      </Ons.Toolbar>
    )}
  >
    Details
  </Ons.Page>
);

export default About;
