import React from "react";
import { GameItem } from "./GameItem.js";

export class GameField extends React.Component {
  render() {
    return (
      <GameItem
        cells={this.props.cells}
        handleCellClick={this.props.handleCellClick}
      />
    );
  }
}
