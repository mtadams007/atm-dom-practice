const depositChecking = document.getElementById('depositChecking');
const withdrawChecking = document.getElementById('withdrawChecking');
const depositSavings = document.getElementById('depositSavings');
const withdrawSavings = document.getElementById('withdrawSavings');
// const checking = document.getElementsByClassName('checking');
// const savings = document.getElementsByClassName('savings');
const checkingAmount = document.getElementById('checkingAmount');
const savingAmount = document.getElementById('savingAmount');
const amountInChecking = document.getElementById('amountInChecking');
const amountInSavings = document.getElementById('amountInSavings');


let deposit = (original, amountAdded) => {
  let sum = Number(original.slice(1,original.length));
  let adder = Number(amountAdded);
  if (adder != NaN) {
    let newSum = adder + sum;
    return '$' + newSum.toString();
  } else {
    alert('Please only enter numbers');
  }
}



depositChecking.addEventListener('click',function(e){
  amountInChecking.innerText = deposit(amountInChecking.innerText,checkingAmount.value);
  checkingAmount.value = '';
})
depositSavings.addEventListener('click',function(e){
  amountInSavings.innerText = deposit(amountInSavings.innerText,savingAmount.value);
  savingAmount.value = '';
})

// let withdraw = (account, backUpAccount, amountWanted) => {
//   let accountAmount = Number(account.slice(1,account.length));
//   let backUpAccountAmount = Number(backUpAccount.slice(1,backUpAccount.length));
//   let amountWantedNum = Number(amountWanted);
//   if (amountWantedNum <= accountAmount) {
//     let newAccount = accountAmount - amountWantedNum;
//     return '$' + newAccount.toString();
//   }
// }

withdrawChecking.addEventListener('click', function(){
  let accountAmount = Number(amountInChecking.innerText.slice(1,amountInChecking.innerText.length));
  let backUpAccountAmount = Number(amountInSavings.innerText.slice(1,amountInSavings.innerText.length));
  let amountWanted = Number(checkingAmount.value);
  if (amountWanted <= accountAmount) {
    let newAccount = accountAmount - amountWanted;
    amountInChecking.innerText = '$' + newAccount.toString();
    checkingAmount.value = '';
  } else if (amountWanted <= accountAmount + backUpAccountAmount) {
    let newAccount = accountAmount + backUpAccountAmount - amountWanted;
    amountInSavings.innerText = '$' + newAccount.toString();
    amountInChecking.innerText = '$0';
    checkingAmount.value = '';
  }

})

withdrawSavings.addEventListener('click', function(){
  let accountAmount = Number(amountInSavings.innerText.slice(1,amountInSavings.innerText.length));
  let backUpAccountAmount = Number(amountInChecking.innerText.slice(1,amountInChecking.innerText.length));
  let amountWanted = Number(savingAmount.value);
  if (amountWanted <= accountAmount) {
    let newAccount = accountAmount - amountWanted;
    amountInSavings.innerText = '$' + newAccount.toString();
  } else if (amountWanted <= accountAmount + backUpAccountAmount) {
    let newAccount = accountAmount + backUpAccountAmount - amountWanted;
    amountInChecking.innerText = '$' + newAccount.toString();
    amountInSavings.innerText = '$0';
  }
  savingAmount.value = '';
})
