// Module Pattern
const CounterModule = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
      return count;
    }
  };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
console.log(CounterModule.reset());     // 0
