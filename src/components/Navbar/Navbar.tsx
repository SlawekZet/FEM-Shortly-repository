import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { handlePlaceholderClick } from "../../utils/utils";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  // This useEffect checks the width of the window to declare if it is mobile or desktop

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
    <div className={`${styles.wrapper} horizontal-padding`}>
      <div className={styles.logoButtonWrapper}>
        <img src="./logo.svg" alt="shortly logotype" className={styles.logo} />
        <Button
          onClick={() => handleMenuClick()}
          className={styles.menuIconButton}
        >
          <img
            src="./menu-icon-mobile.png"
            className={styles.menuIcon}
            alt="hambuger menu icon"
          ></img>
        </Button>
      </div>
      <div
        className={isMenuVisible ? styles.navbar : `${styles.navbar} hidden`}
      >
        <div className={styles.leftWrapper}>
          <div className={styles.leftMenu}>
            <Button onClick={handlePlaceholderClick} className={styles.button}>
              Features
            </Button>
            <Button onClick={handlePlaceholderClick} className={styles.button}>
              Pricing
            </Button>
            <Button onClick={handlePlaceholderClick} className={styles.button}>
              Resources
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <Button onClick={handlePlaceholderClick} className={styles.button}>
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
