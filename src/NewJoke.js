import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Jokes() {
  const [jokes, setJokes] = useState("");
  const [likeJokes, setLikeJokes] = useState([]);
  const [dislikeJokes, setDislikeJokes] = useState([]);

  const getOptions = {
    method: "GET",
    headers: { Accept: "application/json" }
  };

  useEffect(() => {
    getJokes();
    // fetch("https://icanhazdadjoke.com/", getOptions)
    //   .then(response => response.json())
    //   .then(data => setJokes(data.joke))
    //   .catch(err => console.log(err, "error"));
  }, []);

  const likeButtonHandler = () => {
    setLikeJokes([...likeJokes, jokes]);
    getJokes();
    //  fetch("https://icanhazdadjoke.com/", getOptions)
    //  .then(response => response.json())
    //  .then(data => setJokes(data.joke))
    //  .catch(err => console.log(err, "error"));
  };

  const getJokes = () => {
    fetch("https://icanhazdadjoke.com/", getOptions)
      .then((response) => response.json())
      .then((data) => setJokes(data.joke))
      .catch((err) => console.log(err, "error"));
  };

  const dislikeButtonHandler = () => {
    setDislikeJokes([...dislikeJokes, jokes]);
    getJokes();
  };

  return (
    <div className="App">
      <h1>Brighten up your day..</h1>
      <div>{jokes}</div>

      <div>
        <button onClick={likeButtonHandler}>Like</button>
        <button onClick={dislikeButtonHandler}>dislike</button>
      </div>
      <h4>Your liked Jokes </h4>
      <ul>
        {likeJokes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Your dislike Jokes</h4>
      <ul>
        {dislikeJokes.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
