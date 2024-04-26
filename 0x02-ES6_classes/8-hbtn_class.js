export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else {
      this._size = size;
    }
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    } else {
      this._location = location;
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
