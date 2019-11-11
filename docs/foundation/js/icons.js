import React from "react";
import { IconLists } from "../../../icons/list.js";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: "icons"
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div className="flex-fill">
            <h3>{IconLists.length} Icons</h3>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {IconLists.map(icon => (
            <div className="icon-box-content">
              <span className={`dci mr-3 ${icon.name}`} key={icon.name} />
              <span>{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Icons;
