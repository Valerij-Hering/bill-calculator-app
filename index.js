const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);



function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    
    let tip = 0;

    if(document.querySelector('.check1').checked) {
        tip = 0.00;
    }

    if(document.querySelector('.check2').checked) {
        tip = 0.10;
        
        
    }

    if(document.querySelector('.check3').checked) {
        tip = 0.20;
    }

    if(document.querySelector('.check4').checked) {
        tip = 0.30;
    }

    if (bill === '' || people === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
        })
        return false;
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill * tip)/people;
    let totalSum = amountPerPerson+tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson;
    document.querySelector('#dividedTip').textContent = tipPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;

}


