import React, {Component} from 'react';

class Drawer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      closable: true}
   this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({open: !this.state.open})
  }

  render() {
    let position = this.props.position;
    let size = this.props.size;
    let isOpen = this.state.open;
    let isClosable = this.state.closable;
    let openStyles = isOpen ? 'drawer-open' : '';
    return (
      <>
        <button className="btn btn-primary" onClick={this.toggleDrawer}>Open</button>
        <div className={`drawer drawer-${position} ${openStyles} ${size}`}>
          <div className="drawer__backdrop"></div>
          <div className="drawer__content-wrapper">
            {this.state.open &&
              <div className="drawer__content">
                <div className="drawer__content-body">
                  <div className="drawer-header">
                    <h1 className="drawer-header__title">Title goes here</h1>
                    {isClosable &&
                      <button className="btn btn-light ml-auto" onClick={this.toggleDrawer}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    }
                  </div>
                  <div className="drawer-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">Porta ac consectetur ac</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">K8s version</th>
      <th scope="col">Nodes</th>
      <th scope="col" />
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dev-cluster-yg238</td>
      <td>
        <span class="badge badge-gradient-success badge-pill">Active</span>
      </td>
      <td>v1.10.11-gke.1</td>
      <td>12</td>
      <td />
    </tr>
    <tr>
      <td>Testing-cluster-tr33d</td>
      <td>
        <span class="badge badge-gradient-danger badge-pill">Inactive</span>
      </td>
      <td>v1.10</td>
      <td>3</td>
      <td />
    </tr>
    <tr>
      <td>Staging-setup-df12s</td>
      <td>
        <span class="badge badge-gradient-warning badge-pill">Degrated</span>
      </td>
      <td>v1.10.11</td>
      <td>6</td>
      <td />
    </tr>
    <tr>
      <td>Monitor-cluster-8hjq7</td>
      <td>
        <span class="badge badge-gradient-success badge-pill">Active</span>
      </td>
      <td>v1.13.2</td>
      <td>12</td>
      <td />
    </tr>
    <tr>
      <td>Asia-scope-72dr4</td>
      <td>
        <span class="badge badge-gradient-danger badge-pill">Offline</span>
      </td>
      <td>v1.10.13</td>
      <td>12</td>
      <td />
    </tr>
  </tbody>
</table>
                  </div>
                  <div className="drawer-footer">
                    Footer actions
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

      </>
    );
  }
}

export default Drawer;
