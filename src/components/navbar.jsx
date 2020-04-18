import React from "react";

const NavBar = ({ totalCounters }) => {
  //   console.log("Navbar - Rendered");
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://www.google.com">
          Navbar
          <span className="badge badge-pill badge-primary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
