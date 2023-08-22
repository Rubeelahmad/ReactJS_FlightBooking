import React from "react";
import "./styles.css";
import PublicRoutes from "../../routes/PublicRoutes";
import { Chip } from "@mui/material";
import { ICONS } from "../../assets/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerInnerContainer">
        <div direction={"row"} className="header-left">
          {PublicRoutes.map(({ label }) => (
            <span>{label}</span>
          ))}
        </div>
        <div className="header-right">
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>
            <Chip
              icon={ICONS.profileIcon}
              label="Login"
              variant="outlined"
              className="loginChip"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
