import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "./matchedperson.css";
import { Link } from "react-router-dom";
function MatchedPerson({ src, name, time, startChat }) {
  return (
    <div onClick={startChat} className="matchedPerson">
      <Avatar src={src} />
      <div className="matchedPerson__person">
        <h2>{name}</h2>
        <p>
          <small>
            you matched with {name} on {new Date(time?.toDate()).toUTCString()}
          </small>
        </p>
      </div>
      <Link to={`/personalChat/${name}`}>
        <IconButton title="Start Chat">
          <ChatBubbleIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default MatchedPerson;
