import React from "react";

class LogoBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      theme: "logo-light", //default
      logo: props.light //default
    };
    this.download = this.download.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme() {
    let currentTheme = this.state.theme;
    console.log("currentTheme", currentTheme, "logo", this.state.logo);
    if (currentTheme === "logo-dark") {
      this.setState({ theme: "logo-light", logo: this.props.light });
    } else {
      this.setState({ theme: "logo-dark", logo: this.props.dark });
    }
  }
  download() {
    console.log("download", this.props.download);
    window.open(this.props.download);
  }
  render() {
    return (
      <div className={`logobox h-100 ${this.state.theme}`}>
        <div className="logobox-header">
          <div className="my-auto mr-auto ml-3">
            <span className="logobox-header-title">{this.props.name}</span>
          </div>
          <div className="ml-auto">
            <span>
              <button className="btn btn-link" onClick={this.download}>
                <span className="fa fa-download" />
              </button>
            </span>
            <span>
              <button className="btn btn-link" onClick={this.changeTheme}>
                <span className="fa fa-adjust" />
              </button>
            </span>
          </div>
        </div>
        <div className="logobox-content">
          <img src={this.state.logo} className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default LogoBox;
