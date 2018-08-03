import React from "react";

export class GameItem extends React.Component {
  render() {
    return (
      <div className="game-field">
        {(function renderItems() {
          let GameItem = [];
          for (let i = 0; i < 6; i++) {
            GameItem.push(
              <div className="game-cover">
                <div className="appearance" />
              </div>
            );
          }
          return GameItem;
        })()}
      </div>
    );
  }
}
