// Observer Pattern
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("New event happened!");
