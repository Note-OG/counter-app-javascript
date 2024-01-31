const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const change = document.querySelector(".change");
const clear = document.querySelector('.clear');
const textValue = document.querySelector('h2');

let counter = 0;

increment.addEventListener('click', function() {
    counter++;
    textValue.textContent = counter;
})

decrement.addEventListener('click', function() {
    if (counter > 0){
    counter --;
    textValue.textContent = counter;
    }
}
)

change.addEventListener('click', function() {
    textValue.style.backgroundColor = "red";
})

clear.addEventListener('click', function() {
    textValue.style.backgroundColor = "transparent";
})
