import React from "react";
import "./Footer.scss";
import { ReactComponent as In } from "../../About/assets/linkedin.svg";
import { ReactComponent as Git } from "../../About/assets/git.svg";
const Fotter = () => {
  return (
    <footer>
      <In
        className="footer-info"
        onClick={() =>
          window.open("https://www.linkedin.com/in/luis-medina-53835a13a/")
        }
      />
      <Git
        style={{ backgroundColor: "white" }}
        className="footer-info"
        onClick={() => window.open("https://github.com/lamb1303")}
      />
    </footer>
  );
};

export default Fotter;
