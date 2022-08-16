document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit
    const dipositField = document.getElementById('user-deposit');
    const deposit = dipositField.value;

    // update deposit
    const totalDepositElement = document.getElementById('total-deposit');
    const totalDeposit = totalDepositElement.innerText;
    const newDeposit = parseFloat(totalDeposit) + parseFloat(deposit);
    totalDepositElement.innerText = newDeposit;

    // update balance
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = totalBalanceElement.innerText;
    const newBalance = parseFloat(totalBalance) + parseFloat(deposit);
    totalBalanceElement.innerText = newBalance;

    // clear
    dipositField.value='';

})


document.getElementById('btn-withdrow').addEventListener('click', function () {
    // get withdrow
    const withdrowField = document.getElementById('user-withdrow');
    const withdrow = withdrowField.value;

    // update withdrow
    const totalWithdrowElement = document.getElementById('total-withdrow');
    const totalWithdrow = totalWithdrowElement.innerText;
    const newWithdrow = parseFloat(totalWithdrow) + parseFloat(withdrow); 
    totalWithdrowElement.innerText =  newWithdrow;

    // update balance
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = totalBalanceElement.innerText;
    const newBalance = parseFloat(totalBalance) - parseFloat(withdrow);
    totalBalanceElement.innerText = newBalance;

    // clear
    withdrowField.value='';

})
