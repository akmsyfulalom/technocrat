{
  //access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this.balance = _balance;
    }
    public addDiposit(amout: number) {
      this.balance = this.balance + amout;
    }

    public getBalance() {
      return this.balance;
    }

   class StudentAccount extends BankAccount{
    test(){
        this.balance
    }
   }

  }

  const goribManusherAccount = new BankAccount(111, "akm", 200);
  // goribManusherAccount.
  goribManusherAccount.addDiposit(200);

  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);
  //
}
