import * as React from "react";
import * as ons from "onsenui";
import * as Ons from "react-onsenui";
import { PageProps } from "./types";

const Details: React.FC<PageProps> = ({ navigator }) => (
  <Ons.Page
    id="details"
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="left">
          <Ons.BackButton
            onClick={() => {
              navigator.popPage();
            }}
          >
            Back
          </Ons.BackButton>
        </div>
        <div className="center">Details</div>
      </Ons.Toolbar>
    )}
  >
    Details
  </Ons.Page>
);

export default Details;
