var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.queryCommandValue("#error-message");

// console.log(cashGiven.value);
checkButton.addEventListener("click" , function validateAmount(){
    console.log(billAmount.value);
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
        const amountToBeReturned = cashGiven.value-billAmount.value;
        calculateChange(amountToBeReturned);
    } else {
        showMessage = (
            "The cash should atleast be equal to the bill amount "
            );
    }
} else {
    showMessage("invalid Bill Amount");
}

});

function showMessage(msg) {
    console.log("here");
    message.style.display ="block";
    message.innerText = msg;
}