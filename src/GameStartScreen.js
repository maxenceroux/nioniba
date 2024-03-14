import React, { useState } from "react";
import results from "./results.json";

const GameStartScreen = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [randomImage, setRandomImage] = useState("");
  const [availableImages, setAvailableImages] = useState([
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png",
    "img10.png",
  ]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [myIndex, setIndex] = useState();

  const startGame = () => {
    selectRandomImage();
    setGameStarted(true);
    setScore(0);
  };

  const endGame = () => {
    window.location.reload();
  };
  const selectRandomImage = () => {
    if (availableImages.length === 0) {
      console.log("All images have been shown");
      return;
    }

    const newIndex = Math.floor(Math.random() * availableImages.length);
    setRandomImage(availableImages[newIndex]);
    const correctAnswer = results[`level_${level}`][newIndex + 1];
    console.log("img" + newIndex + " level" + level);
    console.log("correct answer " + correctAnswer);
    setIndex(newIndex);
    const newAvailableImages = availableImages.filter(
      (_, index) => index !== newIndex
    );

    setAvailableImages(newAvailableImages);
  };

  const handleOptionClick = (option) => {
    const correctAnswer = results[`level_${level}`][myIndex + 1];
    console.log(availableImages);
    if (option === correctAnswer) {
      if (score === 4 && level === 1) {
        setLevel(2);
        setAvailableImages([
          "img1.png",
          "img2.png",
          "img3.png",
          "img4.png",
          "img5.png",
          "img6.png",
          "img7.png",
          "img8.png",
          "img9.png",
          "img10.png",
          "img11.png",
          "img12.png",
          "img13.png",
          "img14.png",
          "img15.png",
          "img16.png",
        ]);
      } else if (score === 4 && level === 2) {
        setLevel(3);
        setAvailableImages([
          "img1.png",
          "img2.png",
          "img3.png",
          "img4.png",
          "img5.png",
          "img6.png",
          "img7.png",
          "img8.png",
          "img9.png",
          "img10.png",
          "img11.png",
          "img12.png",
          "img13.png",
        ]);
      } else if (score === 4 && level === 3) {
        setLevel(4);
        setAvailableImages([
          "img1.png",
          "img2.png",
          "img3.png",
          "img4.png",
          "img5.png",
          "img6.png",
          "img7.png",
          "img8.png",
          "img9.png",
          "img10.png",
        ]);
      } else if (score === 4 && level === 4) {
        setLevel(5);
      } else {
        selectRandomImage();
      }
      setScore(score + 1);
    } else {
      // Handle incorrect selection (e.g., display a message or end the game)
      console.log("Incorrect. Try again or end game.");
      setScore(0);
      setLevel(1);
      setGameStarted(false);
      setAvailableImages([
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
        "img7.png",
        "img8.png",
        "img9.png",
        "img10.png",
      ]);
    }
    console.log("score " + score);
  };
  if (score === 5 && level === 2) {
    return (
      <div>
        <img
          className="hibou"
          src={`${process.env.PUBLIC_URL}/game_images/level_1.png`}
          alt="Congratulations"
        />
        <div>
          <button className="start-button button" onClick={startGame}>
            Encore !
          </button>
        </div>
      </div>
    );
  }
  if (score === 5 && level === 3) {
    return (
      <div>
        <img
          className="hibou"
          src={`${process.env.PUBLIC_URL}/game_images/level_2.png`}
          alt="Congratulations"
        />
        <div>
          <button className="start-button button" onClick={startGame}>
            Toujours plus !
          </button>
        </div>
      </div>
    );
  }
  if (score === 5 && level === 4) {
    return (
      <div>
        <img
          className="hibou"
          src={`${process.env.PUBLIC_URL}/game_images/level_3.png`}
          alt="Congratulations"
        />
        <div>
          <button className="start-button button" onClick={startGame}>
            La dernière !
          </button>
        </div>
      </div>
    );
  }
  if (score === 5 && level === 5) {
    return (
      <div>
        <img
          className="hibou"
          src={`${process.env.PUBLIC_URL}/game_images/congrats.png`}
          alt="Congratulations"
        />
        <button className="start-button button" onClick={endGame}>
          Une nouvelle partie ?
        </button>
      </div>
    );
  }

  return (
    <div>
      {!gameStarted ? (
        <div>
          <button className="start-button button" onClick={startGame}>
            C'est parti !
          </button>
        </div>
      ) : (
        <>
          <img
            className="hibou"
            src={`${process.env.PUBLIC_URL}/game_images/level_${level}/${randomImage}`}
            alt="Game"
          />
          <div>
            <button
              className="button niba"
              onClick={() => handleOptionClick(0)}
            >
              niba
            </button>
            <button className="button nio" onClick={() => handleOptionClick(1)}>
              nio
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameStartScreen;
