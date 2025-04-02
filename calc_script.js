const currency_EL1 = document.getElementById('currency_1');
const amount_1 = document.getElementById('amount_1');
const currency_EL2 = document.getElementById('currency_2');
const amount_2 = document.getElementById('amount_2');
const rate_EL = document.getElementById('rate');
const swap = document.getElementById('swap');

// perform conversion and calculate rate
function calculate(){
    let currency_1 = currency_EL1.value;
    let currency_2 = currency_EL2.value;

    fetch(`https://open.er-api.com/v6/latest/${currency_1}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_2];
            rate_EL.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;

            amount_2.value = (amount_1.value * rate).toFixed(3);
        });
}

currency_EL1.addEventListener('change', calculate);
currency_EL2.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
amount_2.addEventListener('input', calculate);

swap.addEventListener('click', function(){
    const temp = currency_EL1.value;
    currency_EL1.value = currency_EL2.value;
    currency_EL2.value = temp;
    calculate();
});

calculate();