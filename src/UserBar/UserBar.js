import React from "react";

export class UserBar extends React.Component {
  render() {
    return (
      <div className="user-bar-block">
        <h1 className="header">Whack Game</h1>
        <h3 className="score-header">
          {" "}
          Whacked
          <span className="score"> {`${this.props.score}`}</span>
        </h3>
        <button className="start" onClick={this.props.handleClick}>
          Start
        </button>
      </div>
    );
  }
}
