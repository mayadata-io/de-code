import React from "react";

class LogoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "logo-light", //default
      logo: props.light, //default
      download: props.download,
      logoLight: props.light,
      logoDark: props.dark
    };
  }
  changeTheme() {
    let currentTheme = this.state.theme;
    console.log("currentTheme", currentTheme, "logo", this.state.logo);
    if (currentTheme === "logo-dark") {
      this.setState({ theme: "logo-light", logo: this.state.logoLight });
    } else {
      this.setState({ theme: "logo-dark", logo: this.state.logoDark });
    }
  }
  download() {
    console.log("download", this.state.download);
    window.open(this.state.download);
  }
  render() {
    return (
      <div className="logobox">
        <div className="logobox-header">
          <div className="ml-auto">
            <span>
              <button
                className="btn btn-link"
                onClick={this.download.bind(this)}
              >
                <span className="fa fa-download" />
              </button>
            </span>
            <span>
              <button
                className="btn btn-link"
                onClick={this.changeTheme.bind(this)}
              >
                <span className="fa fa-adjust" />
              </button>
            </span>
          </div>
        </div>
        <div className={`logobox-content ${this.state.theme}`}>
          <img src={this.state.logo} className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default LogoBox;
