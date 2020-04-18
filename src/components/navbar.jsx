import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="https://www.google.com">
            Navbar
            <span className="badge badge-pill badge-primary">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
