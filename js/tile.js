function Tile(position, value, fibnum) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value;
  this.fibnum           = fibnum;
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    fibnum: this.fibnum,
    value: this.value
  };
};
