import React from "react";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://www.google.com">
          Navbar
          <span className="badge badge-pill badge-primary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
