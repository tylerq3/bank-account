function BankAccount() {
  this.name = " ";
  this.balance = 0;
}



BankAccount.prototype.deposit = function (depositAmount) {
  this.balance += depositAmount;
}
