import { handlePlaceholderClick } from "../../utils/utils";
import { FooterElement } from "../FooterElement/FooterElement";

export const Footer = () => {
  const features: string[] = ["Link Sharing", "Branded Links", "Analytics"];
  const resources: string[] = ["Blog", "Developers", "Support"];
  const company: string[] = ["About", "Our Team", "Careers", "Contact"];

  return (
    <section className="footer-wrapper">
      <div className="footer">
        <div className="footer-logotype">
          <img src="./logo-white.svg" alt="shortly logotype" />
        </div>
        <div className="footer-menu row">
          <FooterElement>
            <p className="footer-menu-element-header">Features</p>
            <ul>
              {features.map((e, index: number) => (
                <li key={index} className="footer-menu-element-txt">
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </FooterElement>
          <FooterElement>
            <p className="footer-menu-element-header">Resources</p>
            <ul>
              {resources.map((e, index: number) => (
                <li key={index} className="footer-menu-element-txt">
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </FooterElement>
          <FooterElement>
            <p className="footer-menu-element-header">Company</p>
            <ul>
              {company.map((e, index: number) => (
                <li key={index} className="footer-menu-element-txt">
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </FooterElement>
        </div>
        <div className="footer-socials row">
          <img
            src="./icons/icon-facebook.svg"
            alt="facebook logotype"
            className="footer-socials-img"
            onClick={handlePlaceholderClick}
          />
          <img
            src="./icons/icon-twitter.svg"
            alt="twitter logotype"
            className="footer-socials-img"
            onClick={handlePlaceholderClick}
          />
          <img
            src="./icons/icon-pinterest.svg"
            alt="pinterest logotype"
            className="footer-socials-img"
            onClick={handlePlaceholderClick}
          />
          <img
            src="./icons/icon-instagram.svg"
            alt="instagram logotype"
            className="footer-socials-img"
            onClick={handlePlaceholderClick}
          />
        </div>
      </div>
    </section>
  );
};
