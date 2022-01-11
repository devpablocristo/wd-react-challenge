import React from "react";

const Navigation = ({ openList, toggleCart }) => {
  return (
    <nav className="nav_content">
      <div className="logo_item">
        <img
          src="https://akshatbookstore.netlify.app/static/media/circles.9d8761b5.png"
          alt="logo"
        />
        <p>Welcome to the WD Bookstore App!</p>
      </div>
      <button onClick={toggleCart}>
        {openList ? "Go back to Bookstore" : "Cart"}
      </button>
    </nav>
  );
};

export default Navigation;
