// Strategy Pattern
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    return this.strategy.pay(amount);
  }
}

class CreditCardPayment {
  pay(amount) {
    return `Paid ${amount}$ by Credit Card`;
  }
}

class PayPalPayment {
  pay(amount) {
    return `Paid ${amount}$ by PayPal`;
  }
}

const creditCard = new PaymentContext(new CreditCardPayment());
console.log(creditCard.pay(100));

const paypal = new PaymentContext(new PayPalPayment());
console.log(paypal.pay(100));
