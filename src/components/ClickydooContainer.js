import React, { Component } from "react";
import Navbar from "./Navbar";
import PictureTable from "./PictureTable";
import Footer from "./Footer";

class ClickydooContainer extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    availablePictures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    guessedPictures: [],
    gameState: "Don't click on the same picture twice!",
    gameStateStyle: "white"
  };

  handleImgClick = event => {
    const imgValue = event.target.getAttribute("value");
    event.preventDefault();
    // console.log(imgValue);
    if (this.state.guessedPictures.indexOf(imgValue) > -1) {
      this.setState({
        gameState: "You guessed incorrectly! Try again.",
        gameStateStyle: "red"
      });
      this.handleGameLoad();
    } else {
      let newCurrentScore = this.state.currentScore + 1;
      let newTopScore = this.state.topScore;
      // console.log("Top score: " + newTopScore);
      if (newTopScore < newCurrentScore) {
        newTopScore = newCurrentScore;
        // console.log("New top score: " + newTopScore);
      }
      let newGuessedPictures = [...this.state.guessedPictures];
      newGuessedPictures.push(imgValue);
      let newAvailablePictures = [...this.state.availablePictures];
      this.shuffle(newAvailablePictures);
      this.setState({
        gameState: "You guessed correctly!",
        gameStateStyle: "white",
        currentScore: newCurrentScore,
        topScore: newTopScore,
        guessedPictures: newGuessedPictures,
        availablePictures: newAvailablePictures
      });
      // console.log(this.state.availablePictures);
    }
  };

  handleGameLoad = () => {
    this.setState({
      currentScore: 0,
      guessedPictures: [],
      availablePictures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    });
  };

  // arrayShuffle = arr => arr.sort(() => Math.random() - 0.5);

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          getGameState={this.state.gameState}
          getGameStateStyle={this.state.gameStateStyle}
        />
        <br />
        <br />
        <br />
        <br />
        <section className="container">
          <PictureTable
            picArray={this.state.availablePictures}
            handleImgClick={this.handleImgClick}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default ClickydooContainer;
