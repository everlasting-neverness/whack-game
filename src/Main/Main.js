import React from "react";
import { GameField } from "../GameField/GameField.js";
import { UserBar } from "../UserBar/UserBar.js";
import { Game } from "../Game/Game.js";

export class Main extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.gameInstance = new Game();

    this.state = {
      cells: this.gameInstance.cells,
      score: this.gameInstance.score
    };
    this.gameInstance.subscribe(() => {
      this.setState({
        cells: this.gameInstance.cells,
        score: this.gameInstance.score
      });
    });
  }

  handleClick() {
    this.gameInstance.start();
  }

  handleCellClick(e) {
    console.log(e.target);
    this.gameInstance.select(e.currentTarget.dataset.id);
  }

  render() {
    return (
      <div className="main">
        <UserBar handleClick={this.handleClick} score={this.state.score} />
        <GameField
          cells={this.state.cells}
          handleCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}
