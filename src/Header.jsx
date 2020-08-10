import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ user, basket }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <div className="menu-icon">
        <i className="fas fa-bars fa-lg"></i>
      </div>
      {/* the amazon logo*/}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      {/* the search bar*/}
      <div className="header-search">
        <input className="searchbar" type="text" />
        <i className="fa fa-search searchicon" aria-hidden="true"></i>
      </div>

      {/* the nav links*/}
      <div className="header-nav">
        <Link className="header-link" to={!user && "/login"}>
          <div onClick={login} className="header-option">
            <span className="line1">Hello, {user?.email}</span>
            <span className="line2">{user ? "Sign out" : "Sign in"}</span>
          </div>
        </Link>

        <Link className="header-link" to="/">
          <div className="header-option">
            <span className="line1">Return</span>
            <span className="line2">& order</span>
          </div>
        </Link>

        <Link className="header-link" to="/">
          <div className="header-option">
            <span className="line1">Your</span>
            <span className="line2">prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="cart">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <span className="line2 cart-span">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
