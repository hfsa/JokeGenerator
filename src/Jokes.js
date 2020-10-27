import React, { useState, useEffect } from "react";
//import Liked from './Liked'
import "./styles.css";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [likeArray, setLikeArray] = useState([]);
  const [dislike, setDislike] = useState([]);

  const getOptions = {
    method: "GET",
    headers: { Accept: "application/json" }
  };

  useEffect(() => {

    
    fetch("https://icanhazdadjoke.com/", getOptions)
      .then((response) => response.json())
      .then((data) => setJokes([...jokes, data]))
      .catch((err) => console.log(err, "error"));
  }, []);

  const likeButtonHandler = (item) => {
    let newVal = [...likeArray, item];
    setLikeArray(newVal);
  };

  const dislikeButtonHandler = (item) => {
    let newItem = [...jokes].filter((curr) => curr !== item);
    console.log(newItem, "new item in dislike");
    setDislike(newItem);
    setJokes(jokes);
  };

  return (
    <div className="App">
      <h1>Brighten up your day..</h1>
      {jokes.map((item) => (
        <div key={item.id}>
          {item.joke}
          <div>
            <button onClick={() => likeButtonHandler(item)}>Like</button>
            <button onClick={() => dislikeButtonHandler(item)}>dislike</button>
          </div>
        </div>
      ))}
      {/* // <div>Liked</div>
      <div>disliked</div> */}
    </div>
  );
}
