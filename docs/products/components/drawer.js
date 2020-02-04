import React, {Component} from 'react';

class Drawer extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'right',
      closable: true,
    }
  }
  render() {
    return (
      <div className="drawer">
        <div className="drawer__underlay"></div>
        <div className="drawer__container-wrapper">
          <div className="drawer__container">
            <div className="drawer-header">
              <h1 className="drawer-header__title">Example diagrams</h1>
            </div>
            <div className="drawer-body">{props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
