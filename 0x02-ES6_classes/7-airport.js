const util = require('util');

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = code;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [util.inspect.custom]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}'}`;
  }
}
