import React from "react";
import { GameField } from "../GameField/GameField.js";
import { UserBar } from "../UserBar/UserBar.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setCovers = this.setCovers.bind(this);
    this.randomTime = this.randomTime.bind(this);
    this.randomCover = this.randomCover.bind(this);
    this.lift = this.lift.bind(this);
    this.hit = this.hit.bind(this);
    this.startGame = this.startGame.bind(this);
    this.state = {
      lastItem: null,
      timeUp: false,
      covers: null,
      score: 0
    };
  }

  setCovers() {
    this.setState({ covers });
  }

  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomCover(covers) {
    const idx = Math.floor(Math.random() * covers.length);
    const cover = covers[idx];
    if (cover === lastItem) {
      return this.randomCover(covers);
    }
    this.state.lastItem = cover;
    return cover;
  }

  lift() {
    const time = this.randomTime(200, 1000);
    const hole = this.randomCover(this.state.covers);
    cover.classList.add("up");
    setTimeout(() => {
      cover.classList.remove("up");
      if (!this.state.timeUp) this.lift();
    }, time);
  }

  //
  hit(e) {
    if (!e.isTrusted) return false;
    if (e.target.classList.contains("appearance")) {
      e.target.parentNode.classList.remove("up");
      this.setState({ score: score++ });
    }
  }

  startGame() {
    this.setState({ score: 0 });
    this.setState({ timeUp: false });
    this.lift();
    setTimeout(() => this.setState({ timeUp: true }), 10000);
  }

  render() {
    return (
      <div className="main">
        <UserBar score={this.state.score} startGame={this.startGame} />
        <GameField
          covers={this.state.covers}
          hit={this.hit}
          setCovers={this.setCovers}
        />
      </div>
    );
  }
}
