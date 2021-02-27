// Уважаемый, ментор! В этом д.з. всё работает, но оптимизация кода - не мой конёк. Буду благодарна за конструктивную критику!

const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.children[0];
const btnRenderRef = controlsRef.children[1];
const btnDestroyRef = controlsRef.children[2];
const boxesRef = document.querySelector('#boxes');
let inputValue;

inputRef.addEventListener('input', onValueInput);
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function onValueInput(event) {
    return inputValue = Number(event.currentTarget.value);
} 

function createBoxes(amount) {    
    const arrOfBoxes = [];
    amount = inputValue;
    let sizeItem = 30;

    for (let i = 0; i < amount; i++){        
        const boxItem = document.createElement('div'); 
        boxItem.style.width = `${sizeItem}px`;
        boxItem.style.height = `${sizeItem}px`;
        boxItem.style.backgroundColor = `rgb(${Math.random() * (224) + 1}, ${Math.random() * (224) + 1}, ${Math.random() * (224) + 1})`;
        arrOfBoxes.push(boxItem);
        sizeItem += 10;
    }
    boxesRef.append(...arrOfBoxes);
}

function destroyBoxes() {
    boxes.innerHTML = '';
    inputRef.value = '';
}

