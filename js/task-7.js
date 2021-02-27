const sizeControlRef = document.querySelector('#font-size-control');
const textExampleRef = document.querySelector('#text');

sizeControlRef.addEventListener("input", onInputChange);

function onInputChange (event) {    
    textExampleRef.style.fontSize = `${event.currentTarget.value}px`;
}