class Payment {
    constructor(customerName, amount) {
        this.customerName = customerName;
        this.amount = amount;
    }

    processPayment() {
        console.log(`Payment of ${this.amount} for ${this.customerName} is being processed...`);
    }
}

class CashPayment extends Payment {
    constructor(customerName, amount) {
        super(customerName, amount)

    }

    processPayment() {
        console.log(`Cash payment of ${this.amount} for ${this.customerName} is being processed...`);
    }
}

class CardPayment extends Payment {
    constructor(customerName, amount, cardType){
        super(customerName, amount);
        this.cardType = cardType;
    }

    processPayment() {
        console.log(`${this.cardType} payment of ${this.amount} for ${this.customerName} is being processed...`);
    }
}

class EwalletPayment extends Payment {
    constructor(customerName, amount, walletName){
        super(customerName, amount);
        this.walletName = walletName;
    }

    processPayment() {
        console.log(`${this.walletName} payment of ${this.amount} for ${this.customerName} is being processed...`);
    }
}

const payments = [
    new CashPayment ("John", 500),
    new CardPayment ("Maria", 1500, "Visa"),
    new EwalletPayment ("Peter", 800, "Gcash"),
];

payments.forEach((payment) => {
    payment.processPayment()
});