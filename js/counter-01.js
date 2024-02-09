// console.log('Hello from Counter JS');

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// console.log(counter);


// console.log(btnMinus);
// console.log(btnPlus);

btnMinus.addEventListener('click', function(){

    if ( parseInt(counter.innerText) > 1) {

    }

    counter.innerText = --counter.innerText;
});

btnPlus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText;
});