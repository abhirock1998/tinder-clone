import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "./data-layer";
function Header() {
  const [{ bool }, dispatch] = useDataLayerValue();
  const click = () => {
    dispatch({ type: "SET_BOOL", bool: false });
  };
  return (
    <div className="header">
      {bool ? (
        <Link to="/home">
          <IconButton>
            <ArrowBackIosIcon
              onClick={click}
              fontSize="large"
              className="header__icon"
            />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img src="/images/tinder-logo.png" alt="tinder logo" />
      </Link>
      <Link to="/chatScreen">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
