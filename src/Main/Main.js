import React from "react";
import { GameField } from "../GameField/GameField.js";
import { UserBar } from "../UserBar/UserBar.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <UserBar />
        <GameField />
      </div>
    );
  }
}
