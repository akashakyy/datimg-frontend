import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img
          alt="app-logo"
          src="https://img.freepik.com/premium-vector/love-chat-logo-icon-vector-isolated_717577-95.jpg"
          className="header-logo"
        />
      </Link>
    </div>
  );
};

export default Header;
