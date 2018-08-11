import React from "react";

export class GameItem extends React.Component {
  render() {
    return (
      <div className="game-field">
        {this.props.cells.map((cell, index) => (
          <div
            className={`game-cover ${cell.active ? "up" : ""}`}
            key={index}
            data-id={index}
            onClick={this.props.handleCellClick}
          >
            <div className="appearance" />
          </div>
        ))}
      </div>
    );
  }
}
