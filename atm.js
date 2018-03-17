const depositChecking = document.getElementById('depositChecking');
const withdrawChecking = document.getElementById('withdrawChecking');
const depositSavings = document.getElementById('depositSavings');
const withdrawSavings = document.getElementById('withdrawSavings');
// const checking = document.getElementsByClassName('checking');
// const savings = document.getElementsByClassName('savings');
const checkingAmount = document.getElementById('checkingAmount');
const savingAmount = document.getElementById('savingAmount');
const amountInChecking = document.getElementById('amountInChecking');

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
})
