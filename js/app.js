let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function () {
  let loginAria = document.getElementById("login-areas");
  loginAria.style.display = "none";
  let transactionAria = document.getElementById("transaction-area");
  transactionAria.style.display = "block";
});

//

let depositBtns = document.getElementById("deposit-btns");
depositBtns.addEventListener("click", function () {
  const depositAmmount = document.getElementById("depositAmmount").value;
  const depositNumber = parseFloat(depositAmmount);
  const courrentDeposit = document.getElementById("courrentDeposit").innerText;
  const courrentDepositNumber = parseFloat(courrentDeposit);
  const totalDeposit = depositNumber + courrentDepositNumber;

  document.getElementById("courrentDeposit").innerText = totalDeposit;
  const mainBal = document.getElementById("mainBal").innerText;
  const mainbalNumber = parseFloat(mainBal);
  const totalmainBal = depositNumber + mainbalNumber;

  document.getElementById("mainBal").innerText = totalmainBal;
});

//

let withdrawbtns = document.getElementById("withdraw");

withdrawbtns.addEventListener("click", function () {
  const mainBal = document.getElementById("mainBal").innerText;
  const mainbalNumber = parseFloat(mainBal);
  const withdrawAmmount = document.getElementById("withdrawAmmount").value;
  const withdrawAmmountNumber = parseFloat(withdrawAmmount);
  const withdrawBal = document.getElementById("withdrawBal").innerText;
  const withdrawNumber = parseFloat(withdrawBal);

  const totalWithdrawAmmount = withdrawNumber + withdrawAmmountNumber;
  document.getElementById("withdrawBal").innerText = totalWithdrawAmmount;
  const totalwithdrawMainbal = mainbalNumber - withdrawAmmountNumber;
  document.getElementById("mainBal").innerText = totalwithdrawMainbal;
});
