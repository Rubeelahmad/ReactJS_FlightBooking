import React from "react";
import "./styles.css";
import PublicRoutes from "../../routes/PublicRoutes";
import { Chip } from "@mui/material";
import { ICONS } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authInLocalStorage } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { reset as authReset } from "../../store/features/authentication/authSlice";
import { reset as flightReset } from "../../store/features/flights/flightsSlice";

const Header = ({ isTransparent = false, lightColor = false }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="headerWrapper"
      style={{
        backgroundColor: isTransparent ? "transparent" : "rgb(255 255 255/1)",
      }}
    >
      <div
        className={`headerInnerContainer ${lightColor ? "headerWhite" : ""}`}
      >
        <div direction={"row"} className="header-left">
          {PublicRoutes.map(({ label }) => (
            <span key={label} className="tabLinks">
              {label}
            </span>
          ))}
        </div>
        {!authInLocalStorage.get() ? (
          <div className="header-right">
            <Link className="tabLinks" to={"/register"}>
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
            <Link className="tabLinks" to={"/login"}>
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
        ) : (
          <div className="header-right">
            <Chip
              icon={ICONS.profileIcon}
              label="Log Out"
              variant="outlined"
              className="loginChip"
              clickable
              onClick={() => {
                dispatch(authReset());
                dispatch(flightReset());
                authInLocalStorage.clear();
                navigate("/login");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
