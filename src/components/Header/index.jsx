import React from "react";
import "./styles.css";
import AuthRoutes from "../../routes/AuthRoutes";
import { Chip, Stack } from "@mui/material";
import { ICONS } from "../../assets/icons";

const Header = () => {
  return (
    <div className="headerWrapper">
      <Stack className="headerInnerContainer">
        <Stack className="header-left">
          <span>{AuthRoutes.map(({ label }) => label)}</span>
        </Stack>
        <div className="header-right">
          <span>Register</span>
          <Chip
            icon={ICONS.profileIcon}
            label="profile icon"
            variant="outlined"
          />
        </div>
      </Stack>
    </div>
  );
};

export default Header;
