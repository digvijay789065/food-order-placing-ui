import { MdArrowOutward } from "react-icons/md";
import logo from "../../public/logo.webp";
import React, { useEffect, useState } from "react";
import Register from "./Register";
import "../styles/Header.css"

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowAnim(true), 10);
    } else {
      setShowAnim(false);
    }
  }, [open]);

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo-section">
          <div className="logo-img">
            <img src={logo} alt="Foodie logo" />
          </div>
          <h4 className="logo-text">Foodie</h4>
        </div>

        <div className="nav-section">
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>

          <Register showAnim={showAnim} setOpen={setOpen} open={open} />

          <button onClick={() => setOpen(true)} className="login-btn">
            Log in
          </button>

          <button onClick={() => setOpen(true)} className="signup-btn">
            Sign up <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;