// Business Logic

function BankAccount() {
  this.name = " ";
  this.balance = 0;
}



BankAccount.prototype.deposit = function (depositAmount) {
  this.balance += depositAmount.toFixed(2);
}

BankAccount.prototype.withdraw = function (withdrawAmount) {
  this.balance -= withdrawAmount.toFixed(2);
}

BankAccount.prototype.updateName = function (nameOnAccount) {
  this.name = nameOnAccount;
}

BankAccount.prototype.displayBalance = function () {
  return "$" + this.balance;
}

// User Interface Logic

// registerHandler => create a new bankAccount object from the form, unhide the current balance, and update current balance

// moneyActionHandler => use our functionalities to modify the bankAccount, and update current balance

// overdraft => do something if we withdraw more than we wanted to

window.addEventListener("load",function() {
let registerSection = querySelector("form#register-account");
let depositButton = document.getElementById("depositButton");
let withdrawButton = document.getElementById("withdrawButton");
registerSection.addEventListener("submit", registerHandler);
depositButton.addEventListener("click", depositHandler);
withdrawButton.addEventListener("click", withdrawHandler);
});