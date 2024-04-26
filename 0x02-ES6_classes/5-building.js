export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }
}
