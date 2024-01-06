import { handlePlaceholderClick } from "../../utils/utils";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <section className="hero-wrapper row horizontal-padding">
        <div className="hero-content">
          <h1 className="hero-text">More than just shorter links</h1>
          <p className="hero-paragraph">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            onClick={handlePlaceholderClick}
            className="hero-button button-primary"
          >
            Get Started
          </Button>
        </div>
        <img
          src="./illustration-working.svg"
          alt="person working at a computer"
          className="hero-img"
        />
      </section>
    </>
  );
};
