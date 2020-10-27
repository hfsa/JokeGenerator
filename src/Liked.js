import React, { useState, useEffect } from "react";
import Owl from "../src/images/Owlgiphy.gif";
import Jerry from "../src/images/Jerrygiphy.gif";
import "./styles.css";

export default function Jokes() {
  const [jokes, setJokes] = useState("");
  const [likeJokes, setLikeJokes] = useState([]);
  const [dislikeJokes, setDislikeJokes] = useState([]);
  const [likedPopup, setLikedPopup] = useState("hide");
  const [dislikedPopup, setDisLikedPopup] = useState("hide");
  const [changedImage, setChangedImage] = useState(false);
  const [jokesBar, setJokesBar] = useState("textBox hidden");

  const getOptions = {
    method: "GET",
    headers: { Accept: "application/json" }
  };

  useEffect(() => {
    getJokes();
  }, []);

  const likeButtonHandler = () => {
    setLikeJokes([...likeJokes, jokes]);
    setChangedImage(true);
    getJokes();
  };

  const getJokes = () => {
    fetch("https://icanhazdadjoke.com/", getOptions)
      .then((response) => response.json())
      .then((data) => setJokes(data.joke))
      .catch((err) => console.log(err, "error"));
  };

  const handleJokes = () => {
    getJokes();
    setJokesBar("textBox unhidden");
    setChangedImage(false);
  };

  const dislikeButtonHandler = () => {
    setDislikeJokes([...dislikeJokes, jokes]);
    getJokes();
  };

  const handleLikedPopup = () => {
    setLikedPopup("show");
    setJokesBar("textBox hidden");
  };

  const handleDisLikedPopup = () => {
    setDisLikedPopup("show");
    setJokesBar("textBox hidden");
  };

  const handlePopup = () => {
    setLikedPopup("hide");
  };

  const handleDPopup = () => {
    setDisLikedPopup("hide");
  };

  return (
    <div className="container">
      <h1>Brighten up your day..</h1>
      <img src={changedImage ? Jerry : Owl} alt="Owl walking" />
      <button className="getJokes" onClick={handleJokes}>
        Get jokes!
      </button>
      <div className={jokesBar}>
        <div className="text">
          <span>{jokes}</span>
        </div>
      </div>

      <div className="buttons">
        <button onClick={likeButtonHandler}>Like</button>
        <button onClick={dislikeButtonHandler}>dislike</button>
      </div>
      <button className="displayPopup" onClick={handleLikedPopup}>
        <b>Your liked Jokes</b>
      </button>
      <div className={likedPopup}>
        <button className="close" onClick={handlePopup}>
          x
        </button>
        <ul>
          {likedPopup &&
            likeJokes.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <button className="displayPopup" onClick={handleDisLikedPopup}>
        <b>Your disliked Jokes</b>
      </button>
      <div className={dislikedPopup}>
        <button className="close" onClick={handleDPopup}>
          x
        </button>
        <ul>
          {dislikeJokes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
