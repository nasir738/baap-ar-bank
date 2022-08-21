document.getElementById('btn-Deposit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-Deposit');
    const newDepositAmountString = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerHTML = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    const currentBalanceTotal = previousBlanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    userDeposit.value = '';
})