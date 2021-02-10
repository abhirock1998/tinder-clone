import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./chat.css";
import { useDataLayerValue } from "./data-layer";
import db from "./firebase";
import Input from "./Input";
function Chat() {
  const [chat, setChat] = useState([]);
  const [{ person, user }] = useDataLayerValue();
  useEffect(() => {
    if (user && person) {
      const data = db
        .collection("user")
        .doc(user.uid)
        .collection("match")
        .doc(person.key)
        .collection("chat")
        .orderBy("timestamp", "asc")
        .onSnapshot((snap) => setChat(snap.docs.map((e) => e.data())));
      return () => {
        data();
      };
    }
  }, [user, person]);
  return (
    <div className="chat">
      <div className="chat__box">
        {chat.map((e) =>
      
          e.details.uid !== user.uid ? (
            <div key={e?.key} className="chat__messages">
              <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gjjvcgk5O5zeHZSk7IRUTul87YThc-bsiG5YvScYw=s96-c" />
              <div
                className="chat__messagesText"
                style={{ backgroundColor: "lightgray" }}
              >
                <p>{e.message}</p>
              </div>
            </div>
          ) : (
            <div  key={e?.key} className="chat__messages">
              <div
                className="chat__messagesText"
                style={{ backgroundColor: "#29b3cd ", marginLeft: "auto" }}
              >
                <p>{e.message}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="chat__inputBox">
        <Input user={user} press={person} />
      </div>
    </div>
  );
}

export default Chat;
