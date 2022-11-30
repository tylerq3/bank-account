// Business Logic

function BankAccount() {
  this.name = "";
  this.balance = 0;
}



BankAccount.prototype.deposit = function (depositAmount) {
  this.balance += depositAmount;
}

BankAccount.prototype.withdraw = function (withdrawAmount) {
  this.balance -= withdrawAmount;
}

BankAccount.prototype.updateName = function (nameOnAccount) {
  this.name = nameOnAccount;
}

BankAccount.prototype.displayBalance = function () {
  return "$" + this.balance.toFixed(2);
}

// User Interface Logic
let newAct = new BankAccount();


// moneyActionHandler => use our functionalities to modify the bankAccount, and update current balance
function depositHandler() {
  let newDeposit = parseFloat(document.getElementById("deposit-amount").value);
  if (newDeposit>0){
  newAct.deposit(newDeposit);
  let actBalance = document.getElementById("current-balance");
  actBalance.value = newAct.displayBalance();
  document.getElementById("deposit-error").innerText="Deposit Successful";
  document.getElementById("deposit-amount").value="";
} else {
  document.getElementById("deposit-error").innerText="Please Enter a Positive Amount";
  document.getElementById("deposit-amount").value="";
}
}
// overdraft => do something if we withdraw more than we wanted to
function withdrawHandler() {
  let newWithdraw = parseFloat(document.getElementById("withdraw-amount").value);
  if (newWithdraw <= newAct.balance){
  newAct.withdraw(newWithdraw);
  let actBalance = document.getElementById("current-balance");
  actBalance.value = newAct.displayBalance();
  document.getElementById("withdraw-error").innerText="Withdraw Successful";
  document.getElementById("withdraw-amount").value="";
} else {
  document.getElementById("withdraw-error").innerText="Insufficient Funds";
  document.getElementById("withdraw-amount").value="";
}
}
// registerHandler =>  update current balance 
function registerHandler(event) {
  event.preventDefault();
  let newName = document.getElementById("full-name").value;
  let initialDeposit = document.getElementById("initial-deposit").value;
  newAct.name = newName;
  newAct.balance = parseFloat(initialDeposit);
  let actBalance = document.getElementById("current-balance");
  actBalance.value = newAct.displayBalance();
  let actName = document.getElementById("account-name");
  actName.value = newAct.name;
  // unhide the current balance
  document.getElementById("register-account").setAttribute("class" , "hidden");
  document.getElementById("deposit-withdraw").removeAttribute("class" , "hidden");
  document.getElementById("account-info").removeAttribute("class" , "hidden");
}

window.addEventListener("load",function() {
let registerSection = document.querySelector("form#register-account");
let depositButton = document.getElementById("depositButton");
let withdrawButton = document.getElementById("withdrawButton");
registerSection.addEventListener("submit", registerHandler);
depositButton.addEventListener("click", depositHandler);
withdrawButton.addEventListener("click", withdrawHandler);
});

