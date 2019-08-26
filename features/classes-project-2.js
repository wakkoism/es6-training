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

const johnsAccounts = new BankAccount(100);
johnsAccounts.deposit(25);
johnsAccounts.withdrawal(300);
johnsAccounts.printBalance();

const sarahAccounts = new BankAccount('klljs');
sarahAccounts.deposit('hmm');
sarahAccounts.withdrawal('what');
sarahAccounts.printBalance();
