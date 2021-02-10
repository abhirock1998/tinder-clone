import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import "./input.css";
import { rand } from "./utils";
function Input({ user, press }) {

  const [message, setMessage] = useState("");
  const isDisabled = message === "" ? true : false;
  const send = (e) => {
    e.preventDefault();
    if (user && press) {
        
      db.collection("user")
        .doc(user.uid)
        .collection("match")
        .doc(press.key)
        .collection("chat")
        .add({
          message: message,
          details: {
            personName:user.displayName,
            personImahe:user.photoURL,
            uid:user.uid
          },
          key:rand(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      setMessage("");
    }
  };
  return (
    <form className="input">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type your message.."
      />
      <button disabled={isDisabled} onClick={send} type="submit">
        Send
      </button>
    </form>
  );
}

export default Input;
