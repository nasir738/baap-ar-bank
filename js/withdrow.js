document.getElementById('btn-withdrow').addEventListener('click', function () {
    const userWithdrow = document.getElementById('user-withdrow');
    const newWithdrowString = userWithdrow.value;
    const newWithdrowAmount = parseFloat(newWithdrowString);
    const WithdrawTotalElement = document.getElementById('withdro-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    const currentWitdrawTotal = previousWithdrawTotal + newWithdrowAmount;
    WithdrawTotalElement.innerText = currentWitdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    if (newWithdrowAmount > previousBlanceTotal) {
        alert('Balance Empty');
        return;
    }
    
    const newBlanceTotal = previousBlanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBlanceTotal;

    userWithdrow.value = '';
})