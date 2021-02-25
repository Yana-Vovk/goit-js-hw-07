const refs = {
    decrementBtnRef: document.querySelector('#counter>button'),
    incrementBtnRef: document.querySelector('#counter>button:last-child'),
    counterRef: document.querySelector("#value"),
}

let counterValue = 0;

refs.decrementBtnRef.addEventListener('click', decrement);
refs.incrementBtnRef.addEventListener('click', increment);

function increment() {
    counterValue += 1;
    refs.counterRef.textContent = counterValue;
};

function decrement() { 
    counterValue -= 1;
    refs.counterRef.textContent = counterValue;
};