import * as React from "react";
import * as Ons from "react-onsenui";

interface Props {
  title: string;
  key: string;
  component: React.ComponentType;
}

const TabPage: React.FC<Props> = ({ title, key, component }) => (
  <Ons.Page
    renderToolbar={() => (
      <Ons.Toolbar>
        <div className="center">{title}</div>
      </Ons.Toolbar>
    )}
  >
    {component}
  </Ons.Page>
);

export default TabPage;
