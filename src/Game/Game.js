function generateInterval() {
  return Math.random() * 1500;
}

let timerId;

function startInterval(fn, interval) {
  timerId = setTimeout(() => {
    fn();
    startInterval(fn, interval);
  }, interval());
}

export class Game {
  constructor() {
    this.playing = false;
    this.score = 0;
    this.cells = [
      {
        active: false
      },
      {
        active: false
      },
      {
        active: false
      },
      {
        active: false
      },
      {
        active: false
      },
      {
        active: false
      }
    ];
    this.subscriber = null;
  }

  start() {
    this.playing = true;
    this.score = 0;
    if (this.subscriber) {
      this.subscriber();
    }
    startInterval(this.selectRandomCell.bind(this), generateInterval);
    setTimeout(() => {
      clearTimeout(timerId);
    }, 10000);
    this.cells.forEach(cell => (cell.active = false));
  }

  selectRandomCell() {
    const index = Math.floor(Math.random() * 10) % this.cells.length;
    this.cells[index].active = true;
    this.cells[index].timerId = setTimeout(() => {
      this.cells[index].active = false;
      if (this.subscriber) {
        this.subscriber();
      }
    }, 1000);
    if (this.subscriber) {
      this.subscriber();
    }
  }

  select(index) {
    if (this.cells[index].active) {
      this.score += 10;
      this.cells[index].active = false;
      clearTimeout(this.cells[index].timerId);
      if (this.subscriber) {
        this.subscriber();
      }
    } else {
      this.score -= 5;
      clearTimeout(this.cells[index].timerId);
      if (this.subscriber) {
        this.subscriber();
      }
    }
  }
  subscribe(fn) {
    this.subscriber = fn;
  }
}
