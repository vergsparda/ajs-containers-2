export default class ErrorRepository {
  constructor(arr) {
    if (arr !== undefined) {
      this.errors = new Map();
    } else {
      this.errors = new Map();
    }
    this.errors.set(1, 'error #1');
    this.errors.set(2, 'error #2');
  }

  translate(code) {
    if (!this.errors.has(code)) return 'Unknown error';
    return this.errors.get(code);
  }
}
