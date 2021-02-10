import React from "react";
import "./botombutton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
function BottomButtons() {
  return (
    <div className="bottomButton">
      <IconButton className="bottomButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="bottomButton__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="bottomButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="bottomButton__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="bottomButton__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default BottomButtons;
