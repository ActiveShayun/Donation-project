

// click EventListener

// button 1
document.getElementById('btn1')
.addEventListener('click', function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation1 = GetInputStringValueById('donation1')
    const input1 = GetPinNumberInputValueById('input1');
    const time = new Date();
   

    if(input1 >= 1 && input1 < mainBalance){
        const balance1 = input1 + donation1;
        document.getElementById('donation1').innerText = balance1;
        const totalBalance = mainBalance - input1;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
        const p = document.createElement('div');
        p.innerHTML = `
         <div class="mb-4 bg-red-200 space-y-2 border-2 border-gray-100 rounded-lg text-lg font-semibold py-3 px-4">  
         <p>${input1} Tk Is Donated For Donate for Flood At Noakhali Bangladesh.</p>
         <p>${time}</p>
         </div>
         ` ;
      document.getElementById('card1').appendChild(p);
      document.getElementById('modalShow').classList.remove('hidden');
    }   
    else if (input1 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input1 <= 0 || isNaN(input1)){
        alert('Pleas Provide a Correct Amount')
    }


});

// button 2
document.getElementById('btn2')
.addEventListener('click' ,function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation2 = GetInputStringValueById('donation2')
    const input2 = GetPinNumberInputValueById('input2')
    const time = new Date();

    if(input2 >= 1 && input2 < mainBalance){
        const balance2 = input2 + donation2;
        document.getElementById('donation2').innerText = balance2;
        const totalBalance = mainBalance - input2;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
        const d = document.createElement('div');
        d.innerHTML = `
         <div class="mb-4 border-2 bg-red-300 space-y-2 border-gray-100 rounded-lg text-lg font-semibold py-3 px-4">  
         <p>${input2} Tk Is Donated For Donate for Flood At Feni Bangladesh.</p>
         <p>${time}</p>
         </div>
         ` ;
      document.getElementById('card2').appendChild(d);
      document.getElementById('modalShow').classList.remove('hidden');
    }   
    else if (input2 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input2 <= 0 || isNaN(input2)){
        alert('Pleas Provide a Correct Amount')
    }
});

// button 3
document.getElementById('btn3')
.addEventListener('click' ,function(){
    const mainBalance = GetInputStringValueById('myBalance');
    const donation3 = GetInputStringValueById('donation3')
    const input3 = GetPinNumberInputValueById('input3')
    const time = new Date();

    if(input3 >= 1 && input3 < mainBalance){
        const balance3 = input3 + donation3;
        document.getElementById('donation3').innerText = balance3;
        const totalBalance = mainBalance - input3;
        document.getElementById('myBalance').innerText = totalBalance;
        alert('Congratulation Your Donation Is Successful')
        const v = document.createElement('div');
        v.innerHTML = `
         <div class="mb-4 border-2 bg-red-400 space-y-2 border-gray-100 rounded-lg text-lg font-semibold px-4 py-3 ">  
         <p>${input3} Tk Is Donated For Donate for Injured in the Quota Movement</p>
         <p>${time}</p>
         </div>
         `;
      document.getElementById('card3').appendChild(v);
      document.getElementById('modalShow').classList.remove('hidden');
    }   
    else if (input3 > mainBalance) {
        alert('In sufficient Balance');
    } 
    else if (input3 <= 0 || isNaN(input3)){
        alert('Pleas Provide a Correct Amount')
    }
 
});

// history section 

document.getElementById('HistoryBtn')
.addEventListener('click', function(){
   document.getElementById('donationSection').classList.add(
    'hidden'
   )
   document.getElementById('historySection').classList.remove(
    'hidden'
   )  
   
   document.getElementById('HistoryBtn').classList.add(
    'bg-[#B4F461]',
    'py-4',
    'px-8',
    'rounded-lg',
    'text-xl',
    'font-semibold'
   )
   document.getElementById('HistoryBtn').classList.remove(
    'hover:bg-slate-100',
    'border-2',
    'border-gray-500'
   )
   document.getElementById('donationBtn').classList.remove(
    'bg-[#B4F461]',
    'py-4',
    'px-8',
    'rounded-lg',
    'text-xl',
    'font-semibold'
   )
   document.getElementById('donationBtn').classList.add(
    'border-2',
    'py-4',
    'px-8',
    'border-2',
    'border-gray-500',
    'rounded-xl',
    'text-xl',
    'hover:bg-slate-100'
   )
});

// donation btn 

document.getElementById('donationBtn')
.addEventListener('click', function(){
   document.getElementById('donationSection').classList.remove(
    'hidden'
   )
   document.getElementById('historySection').classList.add(
    'hidden'
   )
   document.getElementById('donationBtn').classList.add(
    'bg-[#B4F461]',
    'py-4',
    'px-8',
    'rounded-lg',
    'text-xl',
    'font-semibold'
   )
   document.getElementById('donationBtn').classList.remove(
      'hover:bg-slate-100',
      'border-2',
      'border-gray-500'
   )

   document.getElementById('HistoryBtn').classList.remove(
    'bg-[#B4F461]',
    'py-4',
    'px-8',
    'rounded-lg',
    'text-xl',
    'font-semibold'
   )
   document.getElementById('HistoryBtn').classList.add(
  
    'py-4',
    'px-8',
    'border-2',
    'border-gray-500',
    'rounded-xl',
    'text-xl',
    'hover:bg-slate-100'
   )
});

//click the blog btn and go to blog.html page
document.getElementById('BlogBtn')
.addEventListener('click', function(){
    window.location.href = 'https://activeshayun.github.io/blog/';
})


// modal show btn 
document.getElementById('modalBtn')
.addEventListener('click', function(){
    document.getElementById('modalShow').classList.add('hidden');
});



