/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export class BankAccount {
  constructor() {
    this._balace = 0;
    this.isOpen = false;
  }

  open() {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._balance = 0;
    this._isOpen = true;
  }

  close() {
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = false;
  }

  deposit(value) {
    if (!this._isOpen || value < 0) {
      throw new ValueError();
    }
    
    this._balance += value;
  }

  withdraw(value) {
    if (!this._isOpen || value < 0 || value > this._balance) {
      throw new ValueError();
    }
    
    this._balance -= value;
  }

  get balance() {
    if (!this._isOpen) {
      throw new ValueError();
    }

    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
