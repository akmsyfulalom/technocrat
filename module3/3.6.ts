{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // setter
    set deposit(amout: number) {
      this._balance = this._balance + amout;
    }

    //   public addDiposit(amout: number) {
    //     this.balance = this.balance + amout;
    //   }

    //   public getBalance() {
    //     return this.balance;
    //   }
    // use getter

    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "akm", 200);
  // goribManusherAccount.
  goribManusherAccount.deposit = 50
  // goribManusherAccount.addDiposit(200);

  // const myBalance = goribManusherAccount.getBalance();
  const myBalance = goribManusherAccount.balance;
  console.log(myBalance);
  //
}
