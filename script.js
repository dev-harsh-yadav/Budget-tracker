const totalAmount = document.getElementById('total');
const income = document.getElementById('income');
const expenses = document.getElementById('expenses');
const opadd = document.querySelectorAll('#add');
const opsub = document.querySelectorAll('#sub');
const work = document.getElementById('work');
const valWork = document.getElementById('val');
const action = document.getElementById('btnTick');

// variable
var choice='';
let total = valWork.value;
let Total;
let oldVal = 0;
let finalAmt = 0;
function updateUiIncome() {
    choice = document.getElementById('r').value;
    
}
function updateUiExpense() {
    choice = document.getElementById('p').value;
}
//after clicking the button
action.addEventListener('click', function () {
    // console.log('clicked');
    // console.log(work.value);
    // console.log(valWork.value);
    // console.log(choice);
    console.log(choice);

    if(valWork.value =="" || work.value=='' || choice==='')
    {
        alert("ALL FIELDS ARE MANDATORY TO FILL");
        return;
    }
    else if (choice == 'income') {
        Total = parseInt(valWork.value);
        console.log(Total);
        finalAmt += Total;
        totalAmount.innerHTML = `₹ ${finalAmt}`;
        // oldVal=Total;
        console.log(finalAmt);
        income.innerHTML = `INCOME ₹${valWork.value}`;
        let ch = 'moreIncome';
        document.querySelector(`.${ch}`).innerHTML += '';
        const html = `<div class="moreIncome">
    <span> ${work.value} </span> <span>${valWork.value}</span></div>`;
        document.querySelector('.moreIncome').insertAdjacentHTML("afterbegin", html);
        document.body.style.background='#054b4b';
    }
    else if(choice == 'expenses'){
        Total = parseInt(valWork.value);
        console.log(Total);
        console.log(finalAmt);
        finalAmt = (finalAmt - Total);
        console.log(finalAmt);
        totalAmount.innerHTML = `₹ ${finalAmt}`;
        expenses.innerHTML = `EXPENSES ₹${valWork.value}`;
        let ch = 'moreExpense';
        document.querySelector(`.${ch}`).innerHTML += '';
        const html = `<div class="moreExpense">
    <span> ${work.value} </span> <span>${valWork.value}</span></div>`;
        document.querySelector('.moreExpense').insertAdjacentHTML('afterbegin', html);
        document.body.style.background='#054b4b';
    }
})
