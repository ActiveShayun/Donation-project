

// click EventListener

document.getElementById('btn1')
.addEventListener('click', function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation1 = GetInputStringValueById('donation1')
    const input1 = GetPinNumberInputValueById('input1')

    if(input1 >= 1 && input1 < mainBalance){
        const balance1 = input1 + donation1;
        document.getElementById('donation1').innerText = balance1;
        const totalBalance = mainBalance - input1;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
    }   
    else if (input1 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input1 <= 0){
        alert('Pleas Provide a Correct Amount')
    }
   
    if(isNaN(input1)){
        alert('Pleas Provide a Correct Amount')
    }

});

document.getElementById('btn2')
.addEventListener('click' ,function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation2 = GetInputStringValueById('donation2')
    const input2 = GetPinNumberInputValueById('input2')
    if(input2 >= 1 && input2 < mainBalance){
        const balance2 = input2 + donation2;
        document.getElementById('donation2').innerText = balance2;
        const totalBalance = mainBalance - input2;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
    }   
    else if (input2 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input2 <= 0){
        alert('Pleas Provide a Correct Amount')
    }
   
    if(isNaN(input2)){
        alert('Pleas Provide a Correct Amount')
    }
})



document.getElementById('btn3')
.addEventListener('click' ,function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation3 = GetInputStringValueById('donation3')
    const input3 = GetPinNumberInputValueById('input3')

    if(input3 >= 1 && input3 < mainBalance){
        const balance3 = input3 + donation3;
        document.getElementById('donation3').innerText = balance3;
        const totalBalance = mainBalance - input3;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
    }   
    else if (input3 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input3 <= 0){
        alert('Pleas Provide a Correct Amount')
    }
   
    if(isNaN(input3)){
        alert('Pleas Provide a Correct Amount')
    } 
});


