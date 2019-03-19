import React from 'react';
import {IconLists} from '../../../resources/fonts/maya-icons/list.js'
class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: 'icons'
    }
  }
  render() {
    return(
      <div>
        <div>
          <h3>{IconLists.length} Icons</h3>
        </div>
      <div className="d-flex flex-wrap">
          { IconLists.map((icon) =>
          <div className="icon-box-content">
            <span className={`mi mi-1x mr-3 ${icon.name}`} key={icon.name}></span>
            <span>{icon.label}</span>
          </div>
          )
         }
         </div>
      </div>
    );
  }
}

export default Icons;
