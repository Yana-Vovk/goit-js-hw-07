const inputRef = document.querySelector("#validation-input");
const VALID_INPUT_LENGTH = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener("blur",onInputBlur);

function onInputBlur(event) {
    const current = event.currentTarget;
    if (current.value.length === VALID_INPUT_LENGTH) {
        current.classList.remove('invalid');
        return current.classList.add('valid');
    } else {
        return current.classList.add('invalid');
    }
}
