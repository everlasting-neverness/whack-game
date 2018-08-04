import React from "react";
import { GameItem } from "./GameItem.js";

export class GameField extends React.Component {
  render() {
    return <GameItem covers={this.props.covers} hit={this.props.hit} setCovers={this.props.setCovers}/>;
  }
}
