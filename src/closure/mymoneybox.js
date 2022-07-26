//no guardo dinero
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);    
}

moneyBox(5);
moneyBox(5);

//con closures
function moneyBoxClosure() {
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBoxClosure();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);

const yourMoneyBox = moneyBoxClosure();
yourMoneyBox(45);
yourMoneyBox(45);
