import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./data-layer";
import db from "./firebase";
import MatchedPerson from "./MatchedPerson";
import "./message.css";
function Message({ start }) {
  const [list, setList] = useState([]);
  const [{ user }, dispatch] = useDataLayerValue();
  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("match")
        .onSnapshot((snap) => setList(snap.docs.map((e) => e.data())));
    } else {
      alert("Network Error 404...");
    }
  }, [user]);
  useEffect(() => {
    dispatch({ type: "SET_BOOL", bool: true });
  }, [dispatch]);
  return (
    <div className="message">
      {list.map((e) => {
        return (
          <MatchedPerson
            startChat={() => start(e)}
            src={e.personImage}
            time={e.timestamp}
            name={e.personName}
            key={e.key}
          />
        );
      })}
    </div>
  );
}

export default Message;
