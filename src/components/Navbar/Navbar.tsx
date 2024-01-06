import { useState, useEffect } from "react";
import { handlePlaceholderClick } from "../../utils/utils";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth >= 427);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navbar-wrapper horizontal-padding">
      <div className="navbar-logo-button-wrapper">
        <img src="./logo.svg" alt="shortly logotype" className="logo" />
        <Button
          onClick={() => handleMenuClick()}
          className="navbar-menu-icon-button"
        >
          <img
            src="./menu-icon-mobile.png"
            className="navbar-menu-icon"
            alt="hambuger menu icon"
          ></img>
        </Button>
      </div>
      <div className={isMenuVisible ? "navbar" : "navbar hidden"}>
        <div className="navbar-left row">
          <div className="navbar-left-menu row">
            <Button onClick={handlePlaceholderClick} className="navbar-button">
              Features
            </Button>
            <Button onClick={handlePlaceholderClick} className="navbar-button">
              Pricing
            </Button>
            <Button onClick={handlePlaceholderClick} className="navbar-button">
              Resources
            </Button>
          </div>
        </div>
        <div className="navbar-right row">
          <Button onClick={handlePlaceholderClick} className="navbar-button">
            Login
          </Button>
          <Button onClick={handlePlaceholderClick} className="button-primary">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};
