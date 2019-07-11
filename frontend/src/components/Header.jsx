import React from "react";

const Header = ({ handlUpdateAdmin, adminState }) => {
  return (
    <header>
      <div className="container list-navbar-items">
        <div className="logo">
          <h1>BBoks</h1>
        </div>
        <div className="admin-login">
          <button
            onClick={() => handlUpdateAdmin()}
            style={{ float: "right", marginTop: -40, cursor: "pointer" }}
            type="button"
            className="btn btn-light"
          >
            {adminState ? "Log Out" : "Admin Login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
