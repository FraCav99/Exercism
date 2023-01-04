export class DiffieHellman {

  private _p: number;
  private _g: number;

  constructor(p: number, g: number) {
    if (!this.isPrimeNumber(p) || !this.isPrimeNumber(g)) {
      throw new Error('One of two numbers is not a prime number!');
    }
    if (this.isOutOfRange(p) || this.isOutOfRange(g)) {
      throw new Error('One of two numbers is out of range (0 - 100)');
    }
    this._p = p;
    this._g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error('Remove this statement and implement this function')
    }
    return (this._g ** privateKey) % this._p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return (theirPublicKey ** myPrivateKey) % this._p;
  }

  private isPrimeNumber(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return num > 1;
  }

  private isOutOfRange(num: number): boolean {
    return num < 1 || num > 100;
  }
}
