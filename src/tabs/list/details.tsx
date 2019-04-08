import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";

interface Props {
  navigator: any;
}

const Details: React.FC<Props> = ({ navigator }) => (
  <Ons.Page>
    <Ons.Button
      onClick={() => {
        navigator.popPage();
      }}
    >
      :-)
    </Ons.Button>
  </Ons.Page>
);

export default Details;
