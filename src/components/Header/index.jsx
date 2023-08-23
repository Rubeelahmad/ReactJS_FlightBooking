import React from "react";
import "./styles.css";
import PublicRoutes from "../../routes/PublicRoutes";
import { Chip } from "@mui/material";
import { ICONS } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isTransparent = false }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className="headerWrapper"
      style={{
        backgroundColor: isTransparent ? "transparent" : "rgb(255 255 255/1)",
      }}
    >
      <div className="headerInnerContainer">
        <div direction={"row"} className="header-left">
          {PublicRoutes.map(({ label }) => (
            <span className="tabLinks">{label}</span>
          ))}
        </div>
        <div className="header-right">
          <Link to={"/register"}>
            {location.pathname === "/register" ? (
              <Chip
                icon={ICONS.profileIcon}
                label="Register"
                variant="outlined"
                className="loginChip"
              />
            ) : (
              "Register"
            )}
          </Link>
          <Link to={"/login"}>
            {location.pathname === "/login" ? (
              <Chip
                icon={ICONS.profileIcon}
                label="Login"
                variant="outlined"
                className="loginChip"
              />
            ) : (
              "login"
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
