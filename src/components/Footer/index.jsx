import React from "react";
import "./styles.css";
import PublicRoutes from "../../routes/PublicRoutes";
import { ICONS } from "../../assets/icons";
const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerInnerContainer">
          <div direction={"row"} className="header-left">
            {PublicRoutes.map(({ label }) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="header-left">
            {[
              ICONS.fbFooterIcon,
              ICONS.twitterFooterIcon,
              ICONS.instaFooterIcon,
              ICONS.tiktokFooterIcon,
              ICONS.telegramFooterIcon,
            ].map((icon) => icon)}
          </div>
          <span>
            © 2023 Test Powered By{" "}
            <span className="footer-brandName">Innovation Factory</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
