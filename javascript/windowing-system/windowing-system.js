// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const newWidth = this._getNewResize(newSize.width, 'width', 'x');
    const newHeight = this._getNewResize(newSize.height, 'height', 'y');
    this.size.resize(newWidth, newHeight);
  }

  _getNewResize(newSize, measure, coordinate) {
    const maxMeasure = this.screenSize[measure] - this.position[coordinate];
    return Math.max(1, Math.min(newSize, maxMeasure));
  }

  move(newPosition) {
    const newX = this._getNewPosition(newPosition.x, 'width');
    const newY = this._getNewPosition(newPosition.y, 'height');
    this.position.move(newX, newY);
  }

  _getNewPosition(newPosition, measure) {
    const maxPos = this.screenSize[measure] - this.size[measure];
    return Math.max(0, Math.min(newPosition, maxPos));
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}