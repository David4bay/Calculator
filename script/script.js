/* 

Add functionality in pure JavaScript DOM and leave comments on jQuery implementation.

*/


const btn = document.querySelector('.numbers');

const btnValue = btn.innerHTML;

const result = document.querySelector('.result');

const resultValue = result.innerHTML;

const equals = document.querySelector('.equals');

const clear = document.querySelector('.clear');

const empty = '';

const clearValue = clear.innerHTML;

btn.addEventListener('click', (e) => {
    resultValue = btnValue;
});

equals.addEventListener('click', (e) => {
    +resultValue;
})

clear.addEventListener('click', (e) => {
    resultValue = empty;
})