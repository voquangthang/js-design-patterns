// Singleton Pattern
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.timestamp = Date.now();
  }

  getTimestamp() {
    return this.timestamp;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getTimestamp());
