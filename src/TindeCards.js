import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import firebase from "firebase";
import "./tindercards.css";
import db from "./firebase";
import { useDataLayerValue } from "./data-layer";
import { rand } from "./utils";
function TindeCards() {
  const [{ user }] = useDataLayerValue();
  const [option, setOption] = useState([]);

  useEffect(() => {
    const removeListener = db
      .collection("people")
      .onSnapshot((snap) => setOption(snap.docs.map((e) => e.data())));
    return () => {
      removeListener();
    };
  }, []);

  const swiped = (direction, item, key = rand()) => {
    if (direction === "right") {
      db.collection("user").doc(user.uid).collection("match").doc(key).set({
        personName: item.personName,
        personImage: item.personImage,
        key: key,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {option.map((e) => {
          return (
            <TinderCard
              onSwipe={(dir) => swiped(dir, e)}
              className="swipe"
              preventSwipe={["up", "down"]}
              key={e.key}
            >
              <div
                style={{ backgroundImage: `url(${e?.personImage})` }}
                className="card"
                key={e.key}
              >
                <h3>{e?.personName}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TindeCards;
