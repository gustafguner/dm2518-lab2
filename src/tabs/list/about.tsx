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
   <p>
   
   <img
     src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
     width="90%"
     alt="Partayy"
   />
    Onsen React by Jakob and Gustaf <br />
 </p>

  </Ons.Page>
);

export default About;
