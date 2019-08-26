"use strict";

// Create bank account class.

class BankAccount {
  // Alow constructor to take balance
  constructor (balance) {
    this.balance = 0;
    if (BankAccount.checkNumber(balance)) {
      this.balance = balance;
    }
  }

  /**
   * Setter for balance.
   */
  set balance (amount) {
    this._balance = amount;
    this.updated = new Date();
  }

  get balance () {
    return this._balance;
  }

  /**
   * The deposit amount.
   *
   * @param {number} amount
   */
  deposit (amount) {
    if (BankAccount.checkNumber(amount)) {
      return this.balance += amount;
    }
  }

  withdrawal (amount) {
    if (BankAccount.checkNumber(amount)) {
      return this.balance -= amount;
    }
  }

  printBalance () {
    console.log(`Your remaining balance is ${this.balance} on ${this.updated}.`);
  }

  static checkNumber (amount) {
    if (typeof amount === 'number') {
      return true;
    }
    return false;
  }
}

class savingsAccount extends BankAccount {
  constructor(balance) {
    super (balance);
  }
  withdrawal () {
    console.log(`Your can not withdrawal from your savings account.`);
  }

  deposit (amount) {
    super.deposit(amount);
    this.printSavings();
  }
  printSavings() {
    console.log(`Congratulations! You've just saved ${this.balance}.`);
  }
}

const johnsAccounts = new BankAccount(100);
johnsAccounts.deposit(25);
johnsAccounts.withdrawal(300);
johnsAccounts.printBalance();


const johnsSavings = new savingsAccount(100);
johnsSavings.deposit(25);
johnsSavings.withdrawal(300);
johnsSavings.printBalance();

